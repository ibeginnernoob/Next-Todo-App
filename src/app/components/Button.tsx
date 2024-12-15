"use client"

type buttonProps={
    children:React.ReactNode,
    onClick:()=>void,
    styles:string
}

export default function Button({children,onClick,styles}:buttonProps){
    return(
        <button className={`${styles}`} onClick={onClick}>{children}</button>
    )
}