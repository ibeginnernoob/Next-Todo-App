'use client'

import { useState } from "react"

import Input from "../../components/Input"
import Button from "../../components/Button"
import CreateTodo from "../../actions/todos/create"
import { useRouter } from "next/router"

export default function(){
    const [todoDetails,setTodoDetails]=useState({
        title:'',
        description:''
    })

    const router=useRouter()

    return(
        <div>
            <Input onChange={(e)=>{
                setTodoDetails((prevDetails)=>{
                    return {
                        ...prevDetails,
                        title:e.target.value
                    }
                })
            }}>Title</Input>
            <Input onChange={(e)=>{
                setTodoDetails((prevDetails)=>{
                    return {
                        ...prevDetails,
                        description:e.target.value
                    }
                })
            }}>{"Description (optional)"}</Input>
            <Button onClick={async ()=>{
                const res=await CreateTodo(todoDetails)
                if(res){
                    
                }
            }} styles="border-2">Create Todo</Button>
        </div>
    )
}