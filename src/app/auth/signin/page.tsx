'use client'

import { signIn } from "next-auth/react";
import Button from "../../components/Button";
import { useState } from "react";
import Input from "../../components/Input";

export default function(){
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    return(
        <div>
            <Input onChange={(e)=>{
                setEmail(e.target.value)
            }}>Email</Input>
            <Input onChange={(e)=>{
                setPassword(e.target.value)
            }}>Password</Input>
            <Button styles="border-2" onClick={()=>{
                signIn('credentials',{
                    email:email,
                    password:password
                })
            }}>Login</Button>
            <Button styles="border-2" onClick={()=>{
                signIn('google')
            }}>Login with Google</Button>
            <Button styles="border-2" onClick={()=>{
                signIn('github')
            }}>Login with Github</Button>
        </div>
    )
}