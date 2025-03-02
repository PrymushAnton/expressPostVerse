import { Prisma } from '@prisma/client'
import userRepository from "./userRepository"
import { IError, ISuccess } from '../types/types';
import { CreateUser, User } from './types';
import { hash, compare } from "bcryptjs"
import { sign } from 'jsonwebtoken';
import { SECRET_KEY } from '../config/token';

// const ComparePassword = async (hash: string, password: string): Promise<boolean> => {
//     const isMatch = await bcrypt.compare(password, hash);
//     return isMatch;
// }

async function loginUser(email: string, password: string): Promise< IError | ISuccess<string> > {
    const user = await userRepository.findUserByEmail(email)

    if (!user) {
        return {status: "error", message: "User does not exists"}
    }

    const isPasswordMatched = await compare(password, user.password)

    if (!isPasswordMatched) {
        return {status: "error", message: "Wrong password"}
    }

    const token = sign({id: user.id}, SECRET_KEY, {expiresIn: "1d"})
    return {status: 'success', data: token}
}

async function createUser(data: CreateUser): Promise< IError | ISuccess<string> > {
    const user = await userRepository.findUserByEmail(data.email)

    if (user) {
        return {status: "error", message: "User exists"}
    }

    const hashedPassword = await hash(data.password, 10)

    const userData = {
        ...data,
        password: hashedPassword
    }

    const newUser = await userRepository.createUser(userData)

    if (!newUser) {
        return {status: "error", message: "Error when creating a user"}
    }

    const token = sign({id: newUser.id}, SECRET_KEY, {expiresIn: "1d"})

    return {status: "success", data: token}
}

async function getUserById(id: number): Promise<IError | ISuccess<User>>{
    
    const user = await userRepository.getUserById(id)

    if (!user) {
        return {status: "error", message: "There is no user with such id"}
    }

    return {status: "success", data: user}

}

const userService = {
    loginUser: loginUser,
    createUser: createUser,
    getUserById: getUserById
}

export default userService