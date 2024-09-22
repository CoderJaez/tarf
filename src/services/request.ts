"use server"
import Request from "@/models/Request";
import { RequestSchema } from "@/schemas/request.schema";
import { z } from 'zod'
import moment from "moment";
const getRequest = async () => {
    const requests = await Request.findAll();
    return requests;
}

const insertRequest = async (data: z.infer<typeof RequestSchema>) => {
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

        })
        if (newRequest)
            return true;
    } catch (error: any) {
        console.log(error.message)
        return false;
    }

    return false;
}


export { getRequest, insertRequest }