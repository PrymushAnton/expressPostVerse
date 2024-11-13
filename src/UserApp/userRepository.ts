import { Prisma, PrismaClient } from "@prisma/client";
import client from '../client/prismaClient'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import * as bcrypt from 'bcrypt';


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
        
        
    } catch(err){
        if (err instanceof PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2015'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2019'){
                console.log(err.message)
                throw err
            } 
        }
    }
}


async function createUser(data: Prisma.UserCreateInput){
    try{
        const user = await client.user.create({
            data: {
                username: data.username,
                email: data.email,
                password: data.password,
                role: data.role
            }
        })
        return user
    } catch(err){
        if (err instanceof PrismaClientKnownRequestError){
            if (err.code == 'P2002'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2015'){
                console.log(err.message)
                throw err
            } else if (err.code == 'P2019'){
                console.log(err.message)
                throw err
            } 
        }
    }
}



const userRepository = {
    findUserByEmail: findUserByEmail,
    createUser: createUser
}

export default userRepository