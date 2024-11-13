import { Prisma } from '@prisma/client'
import userRepository from "./userRepository"
import * as bcrypt from 'bcrypt';

interface ISuccess{
    status: 'success',
    data: IUser
}

interface IError{
    status: 'error',
    message: string
}

interface IUser{
    id: number,
    username: string,
    email: string,
    password: string,
    role: string
}

// const ComparePassword = async (hash: string, password: string): Promise<boolean> => {
//     const isMatch = await bcrypt.compare(password, hash);
//     return isMatch;
// }

async function loginUser(email: string, password: string): Promise< IError | ISuccess > {
    const user = await userRepository.findUserByEmail(email=email)
    if (user == null || user == undefined){
        return {status: "error", message: "User does not exist"}
    } else {
        if (password == user.password){
            return {status: 'success', data: user}
        }
        return {status: "error", message: "password does not match"}
    }
}

async function createUser(data: {username:string, email:string, password:string}): Promise< IError | ISuccess > {
    const user = await userRepository.findUserByEmail(data.email)
    if (user == null || user == undefined){
        const full_data = {...data, role:"user"}
        const created_user: any = await userRepository.createUser(full_data)
        return {status: 'success', data: created_user}
    } else {
        return {status: 'error', message: "User exists"}
    }
}

const userService = {
    loginUser: loginUser,
    createUser: createUser
}

export default userService