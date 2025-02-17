import { useRef } from "react"


export const Search = ({getPaises})=>{
    const inputRef = useRef()

    return <>
    <h3>Buscar país</h3>
    <input onChange={()=>{ getPaises(inputRef.current.value) }} ref={inputRef} type="text" placeholder="Ingrese el nombre del país"/>
    </>
} 