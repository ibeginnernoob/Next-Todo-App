import { NextResponse } from "next/server";
import prisma from "@/prisma/index";

type signupDetailsReq={
    data:{
        username:string,
        email:string,
        password:string
    }
}

export const POST=async (req:signupDetailsReq)=>{
    try{
        const userDetails={
            username:req.data.username,
            email:req.data.email,
            password:req.data.password
        }

        const user=await prisma.user.findUnique({
            where:{
                email:userDetails.email
            }
        })

        if(user){
            return NextResponse.json({
                msg:'Signup failed! User with email already exists.'
            },{
                status:409
            })
        }

        await prisma.user.create({
            data:userDetails
        })

        return NextResponse.json({
            msg:'Signup successful!'
        },{
            status:201
        })
    } catch(e){
        console.log(e)
        return NextResponse.json({
            msg:'Signup failed! User with email already exists.'
        },{
            status:500
        })
    }
}