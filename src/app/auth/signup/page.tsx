'use client'

import { useState } from "react"
import Input from "../../components/Input"
import Button from "../../components/Button"

export default function(){
    const [userDetails,setUserDetails]=useState({
        username:'',
        email:'',
        password:''
    })

    return(
        <div>
            <Input onChange={(e)=>{
                setUserDetails(prevDetails=>{
                    return {
                        ...prevDetails,
                        username:e.target.value
                    }
                })
            }}>Username</Input>
            <Input onChange={(e)=>{
                setUserDetails(prevDetails=>{
                    return {
                        ...prevDetails,
                        email:e.target.value
                    }
                })
            }}>Email</Input>
            <Input onChange={(e)=>{
                setUserDetails(prevDetails=>{
                    return {
                        ...prevDetails,
                        password:e.target.value
                    }
                })
            }}>Password</Input>
            <Button styles="" onClick={()=>{

            }}>Sign up</Button>
        </div>
    )
}