import client from '../client/prismaClient'
import { consoleLogError } from '../config/consoleLogError';
import { CreateUser } from "./types";
import { Prisma } from '@prisma/client';

async function findUserByEmail(email:string){
    try{
        const user = await client.user.findUnique({
            where:{
                email: email
            }
        })
        return user
        
        
    } catch(error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError){
            consoleLogError(error)
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
            consoleLogError(error)
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