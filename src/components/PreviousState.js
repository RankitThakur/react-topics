import { useState } from "react"

export function PreviousState () {
    const [count, setCount] = useState(0);
    function previousValue () {
        setCount((pre)=>{
            debugger
            console.log(pre)
            if(pre%2==0){
                alert('hello')
            }
        return pre+1
        })
    }
    return <>
    <h1>{count}</h1>
    <button onClick={previousValue}>Add Count State</button>
    <button onClick={previousValue}>Reset</button>

    </>
}