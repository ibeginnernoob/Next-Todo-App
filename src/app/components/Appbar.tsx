"use client"

import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function Appbar(){
    const session=useSession()

    return(
        <div>
            <button onClick={()=>signIn()}>Login</button>
            <button onClick={()=>signOut()}>Logout</button>
            {JSON.stringify(session)}
        </div>
    )
}