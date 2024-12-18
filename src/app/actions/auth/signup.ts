"use server"

import prisma from "@/prisma/index";

type signupDetails={
    username:string,
    email:string,
    password:string
}

export default async function signup({username,email,password}:signupDetails){
    try{
        const user=await prisma.user.findUnique({
            where:{
                email:email
            }
        })
        if(user){
            return false
        }
        await prisma.user.create({
            data:{
                username,
                email,
                password
            }
        })
        return true
    } catch(e){
        console.log(e)
        return false
    }
}