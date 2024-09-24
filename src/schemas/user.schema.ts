import { z } from 'zod';

export const userSchema = z.object({
    name: z.string({ required_error: 'Name is required.' }).min(5, { message: "Name must at least 5 characters long." }),
    username: z.string({ required_error: "Username is required" }).min(5, { message: "Username must at least 5 characters long." }),
    email: z.string({ required_error: "Email is required." }).email({ message: "Email must be valid email" }),
    password: z.string({ required_error: 'Password is required.' }).min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string({ required_error: 'Confirm password is required.' }).min(8, {
        message: 'Confirm password must be at least 8 characters long'
    })
}).refine((data: any) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})