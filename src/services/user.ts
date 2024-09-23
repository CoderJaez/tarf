import User from "@/models/User";
import { userSchema } from "@/schemas/user.schema";
import { z } from 'zod'
const getUsers = async () => {
    const users = await User.findAll();
    return users
}


const insertUser = async (data: z.infer<typeof userSchema>) => {
    const newUser = await User.create({

    })
}