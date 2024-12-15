"use client"

import { signIn, signOut } from "next-auth/react"
import { useSession } from "next-auth/react"

export default function Appbar(){
    const session=useSession()

    return(
        <div>
            {!session.data?.user?.name ? <button onClick={()=>signIn()}>Login</button> : null}
            {session.data?.user?.name ? <button onClick={()=>signOut()}>Logout</button> : null}
            {JSON.stringify(session)}
        </div>
    )
}