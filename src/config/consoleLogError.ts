import { Prisma } from "@prisma/client"
import { errors, IErrors } from "../config/errorCodes"

export function consoleLogError(error: Prisma.PrismaClientKnownRequestError){
    if (error.code in Object.keys(errors)){
        const errorKey: keyof IErrors = error.code
        console.log(errors[errorKey])
    }
}