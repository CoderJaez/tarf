"use server"
import RequestType from "@/models/RequestType";
const getRequestTypes = async () => {
    const results = await RequestType.findAll({
        attributes: ["id", "type"],
        where: {
            requestId: null
        },
        include:
        {
            model: RequestType,
            as: 'SubType',
            attributes: ['id', 'type']
        },


    })

    return results
}


export { getRequestTypes }