"use server"
import beamsClient from "@/libs/push_notifications/beam";
import Request from "@/models/Request";
import RequestDetail from "@/models/RequestDetails";
import { RequestSchema } from "@/schemas/request.schema";
import { z } from 'zod'
import sequelize from "@/connection";
import Office from "@/models/Office";
import User from "@/models/User";
import RequestType from "@/models/RequestType";
import { Op } from "sequelize";
import PusherServer from "@/libs/pusher_channels/serverChannel";

const getRequest = async () => {
    const requests = await Request.findAll({
        include: [
            {
                model: Office,
                as: 'Office',
            },
            {
                model: User,
            }
        ]


    });
    return requests;
}

const getPendingRequest = async () => {
    try {
        const requests = await Request.findAll({
            include: [{
                model: Office,

            }, {
                model: RequestDetail,
                include: [{
                    model: RequestType,
                    where: { requestId: { [Op.eq]: null } }
                }],

            }],
            where: { assignedTechId: { [Op.eq]: null } }
        })
        return requests

    } catch (error: any) {
        console.log(error.message)
        return null
    }
}

const getOnePendingRequest = async (id: number) => {
    try {
        const request = await Request.findOne({
            include: [{
                model: Office,

            }, {
                model: RequestDetail,
                include: [{
                    model: RequestType,
                    where: { requestId: { [Op.eq]: null } }
                }],

            }],
            where: { id: id }
        })
        return request

    } catch (error: any) {
        console.log(error.message)
        return null
    }
}

const insertRequest = async (data: z.infer<typeof RequestSchema>) => {
    const t = await sequelize.transaction();
    try {
        const newRequest = await Request.create({
            name: data.request_name,
            contactNo: data.contact_no,
            agreedTimeLine: data.agreed_timeline,
            dateRequested: new Date(`${data.date_requested} ${data.time_requested}`),
            equipmentType: data.equipment_type,
            brand: data.model,
            propertyNo: data.property_no,
            serialNo: data.equipment_sn,
            remarks: data.remarks,
            recommendation: data.action_taken,
            officeId: parseInt(data.office)

        }, { transaction: t })

        for (let typeId in data.request_type) {

            const request_details = await RequestDetail.create({
                requestTypeId: parseInt(data.request_type[typeId]),
                requestId: newRequest.id

            }, { transaction: t })

        }

        await beamsClient.publishToInterests(["hello"], {
            web: {
                notification: {
                    title: `You have new ticket from ${data.request_name}`,
                    body: data.remarks,
                },
            },
        });

        const pendingNewRequest = await getOnePendingRequest(newRequest.id)
        PusherServer.trigger('request', 'request-event', {
            id: pendingNewRequest?.id,
            name: pendingNewRequest?.name,
            office: pendingNewRequest?.Office.acronym,
            remarks: pendingNewRequest?.remarks,
            requestTypes: pendingNewRequest?.RequestDetails.map((req) => req.RequestType.type)
        })
        t.commit();
        return true;
    } catch (error: any) {
        console.log("Error:", error.message)
        t.rollback();
        return false;
    }

    return true;

}


const assignTech = async (techId: number, requestId: number) => {
    try {
        const result = await Request.update({ assignedTechId: techId }, {
            where: { id: requestId }
        })
        if (!result) return true;
        return true
    } catch (error: any) {
        console.log('Request Model:', error.message)
        return false;
    }
}

export { getRequest, insertRequest, getPendingRequest, assignTech }