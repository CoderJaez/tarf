import { z } from 'zod';

export const userSchema = z.object({
    name: z.string({ message: 'Name is required.' }),
    username: z.string({ message: "Username is required" }).min(6, { message: "Username must at least 6 characters long." }),
    email: z.string({ message: "Email is required." }).email({ message: "Email must be valid email" }),
    password: z.string({ message: 'Password is required.' }).min(8, { message: 'Password must be at least 8 characters long' }),
    confirmPassword: z.string({ message: 'Confirm password is required.' }).min(8, {
        message: 'Confirm password must be at least 8 characters long'
    })
}).refine((data: any) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword']
})