import { ChangeEvent } from "react"

type inputProps={
    children:React.ReactNode,
    onChange:(e:ChangeEvent<HTMLInputElement>)=>void
}

export default function Input({children,onChange}:inputProps){
    return(
        <input onChange={onChange} type="text" placeholder={`${children}`} />
    )
}