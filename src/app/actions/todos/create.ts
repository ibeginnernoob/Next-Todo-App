'use server'

import { getServerSession } from "next-auth"
import prisma from "@/prisma/index"

export default async function CreateTodo(todoDetails:{
    title:string,
    description:string
}){
    try{
        const session=await getServerSession()
        if(!session){
            return false
        }
        const DBRes=await prisma.todo.create({
            data:{
                title:todoDetails.title,
                description:todoDetails.description,
                createdAt:new Date(),
                //@ts-ignore
                userId:session.user!.id
            }
        })
        if(!DBRes){
            return false
        }
        return true
    } catch(e){
        console.log(e)
        return false
    }
}