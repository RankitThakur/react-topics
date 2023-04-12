import { useEffect, useState } from "react"

export function Comp3 () {
    const [apiData, setApiData ] = useState() 
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts/1/comments").then(res=> res.json().then(res =>
        setApiData(res)))
        console.log(apiData)
    })
    return (
        <>
        <div>{
            apiData.map(res=> 
                <h1>{res.email}</h1>)
            }</div>
        </>
    )
}