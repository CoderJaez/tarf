"use server"
import beamsClient from "@/libs/push_notifications/beam";
import Request from "@/models/Request";
import RequestDetail from "@/models/RequestDetails";
import { RequestSchema } from "@/schemas/request.schema";
import { z } from 'zod'
import sequelize from "@/connection";
import Office from "@/models/Office";
import User from "@/models/User";


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

        t.commit();
        await beamsClient.publishToInterests(["hello"], {
            web: {
                notification: {
                    title: "You have new request",
                    body: data.remarks,
                },
            },
        });
        return true;
    } catch (error: any) {
        console.log(error.message)
        t.rollback();
        return false;
    }

    return false;
}


export { getRequest, insertRequest }