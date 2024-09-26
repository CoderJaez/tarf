import { z } from 'zod'

const userAuthSchema = z.object({
    username: z.string({ required_error: "Username is required. " }),
    password: z.string({ required_error: "Password is required." })
})

export default userAuthSchema;
