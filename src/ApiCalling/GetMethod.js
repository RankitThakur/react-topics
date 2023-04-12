import { useEffect, useState } from "react"
import { ApiHome } from "./ApiHome";

export function ApiMethod () {
    const [apiData, setData] = useState([]);
    useEffect (()=> {
        const fetchData = "https://jsonplaceholder.typicode.com/todos" 
        fetch(fetchData).then((res)=> res.json().then((res)=> setData(res)))
    }, [])
    return (
        <>
    <ApiHome api = {apiData}/>
        </>
    )
}