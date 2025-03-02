import { Prisma, PrismaClient } from "@prisma/client";
import client from '../client/prismaClient'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import * as bcrypt from 'bcrypt';

import { errors, IErrors } from "../config/errorCodes";
import { CreateUser } from "./types";

// const HashPassword = async (password: string): Promise<string> => {
//     const salt = await bcrypt.genSalt();
//     const hash = await bcrypt.hash(password, salt);
//     return hash;
// }




async function findUserByEmail(email:string){
    try{
        const user = await client.user.findUnique({
            where:{
                email: email
            }
        })
        return user
        
        
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}


async function createUser(data: CreateUser){
    try{
        const user = await client.user.create({
            data: data
        })
        return user
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}

async function getUserById(id:number){
    try{
        const user = await client.user.findUnique({
            where:{
                id: id
            },
            omit: {
                password: true
            }
        })
        return user
        
        
    } catch(error){
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            if (error.code in Object.keys(errors)){
                const errorKey: keyof IErrors = error.code
                console.log(errors[errorKey])
            }
        }
    }
}


const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser,
    getUserById: getUserById
}

export default userRepository