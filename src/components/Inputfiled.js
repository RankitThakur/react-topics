import React from 'react'
import { useState } from 'react'

function Inputfiled() {
    let [data, setData] = useState(null)
    function getData (val){
         setData(val.target.value)
        console.log(val.target.value)
     }
  return (
    <div>
        <p>Get input data</p>
        <input placeholder='Enter value' onChange={getData}/>
        <input type="checkbox" onChange={getData}/>

        <p>{data}</p>
    </div>
  )
}

export default Inputfiled