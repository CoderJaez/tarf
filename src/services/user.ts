'use server'
import User from "@/models/User";
import { userSchema } from "@/schemas/user.schema";
import { z } from 'zod'
import bcrypt from 'bcrypt'
const getUsers = async () => {
    const users = await User.findAll();
    return users
}


const insertUser = async (data: z.infer<typeof userSchema>) => {
    const newUser = await User.create({
        name: data.name,
        username: data.username,
        email: data.email,
        password: await bcrypt.hashSync(data.password, 12)
    })

    if (newUser)
        return true
    return false
}


export { getUsers, insertUser }