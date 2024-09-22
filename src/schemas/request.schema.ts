import { z, ZodType } from 'zod';

export const RequestSchema = z.object({
    request_name: z.string({ message: "Name is required" }).min(4, { message: "Name length must be greater than 4 characters." }),
    date_requested: z.string({ required_error: "Date is required." }).date('Must be a valid date.'),
    time_requested: z.string({ required_error: "Time is required." }),
    request_type: z.array(z.string(), { message: "Select the type of request." }).nonempty({ message: "Select the type of request" }),
    contact_no: z.string().optional(),
    office: z.string().min(1, { message: "Select an office" }),
    agreed_timeline: z.string().optional(),
    remarks: z.string({ required_error: "Remarks is required." }).min(5, { message: "Please add remarks." }),
    action_taken: z.string().optional(),
    other_request: z.string().optional(),
    equipment_type: z.string().optional(),
    model: z.string().optional(),
    property_no: z.string().optional(),
    equipment_sn: z.string().optional()


})


