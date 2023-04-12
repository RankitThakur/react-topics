import React, { useState } from 'react'
import { useEffect } from 'react'

export default function HookUseEffect() {
    const [data, userSet] = useState(0)
    const [count, userCount] = useState(0)

    useEffect(()=>{
        console.warn("I'M READY")
    }, [data])
  return (

    <div>
        <div>Hello {data}</div>
            <button onClick={()=> userSet(data+1)}>Show Iteam</button>
    </div>
  )
}
