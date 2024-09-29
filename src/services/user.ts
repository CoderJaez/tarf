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

const authUser = async (username: string, password: string) => {
    const user = await User.findOne({
        where: { username: username }
    })
    if (!user)
        return null

    const isPasswordMatch = await bcrypt.compare(password, user.password)
    console.log("Password match: ", isPasswordMatch)
    if (!isPasswordMatch)
        return null

    return user

}


export { getUsers, insertUser, authUser }