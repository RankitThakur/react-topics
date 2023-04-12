import React from 'react'
import { useState } from 'react'
import './childcomponent.css'
import { NavBar } from './routers/NavBar'

function ChildComponent (props) {
    const [data, setData] = useState(props.data)  
    console.log(data)
    function updateData (){
        setData(data+1 )
    }
    return (<div>
            <NavBar/>
        <h2>ChildComponent</h2>      
        <h3>{data}</h3> 
        <button onClick={updateData}>Update data</button>
        <h2>-----------------------</h2>     
        </div>)

}

export default ChildComponent