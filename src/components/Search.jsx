import { useEffect, useRef } from "react"
import { useState } from "react"

export const Search = ({ setCountry }) => {

    const [band, setBand] = useState (false)
    const inputRef = useRef()

    const getCountry = async (name) => {
        let response = await fetch("https://restcountries.com/v3.1/name/" + name)
        let data = await response.json()
        if (data.status == 404) {
            setError(true)
            return
        }
        setError(false)
        setCountry(data)
    }

    useEffect(()=>{
        if(band && inputRef.current.value !==""){
                getCountry(inputRef.current.value)
        }

        return setBand(false)
    },[band])

    return <>
        <h2>Busca tu país</h2>
        <input ref={inputRef} onChange={() => { setBand(true) }} type="text" placeholder="Escribe aquí" />

    </>
}