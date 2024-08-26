import Office from "@/models/Office"
const Offices = async () => {
    const result = await Office.findAll()
    //Nag long weekend vacaay....
    return result;

}


export default Offices