import Request from "@/models/Request";

const getRequest = async () => {
    const requests = await Request.findAll();
    return requests;
}


export { getRequest }