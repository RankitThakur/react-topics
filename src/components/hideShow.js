import React from 'react'
import { useState } from 'react'

export default function HideShow() {
    const [data, setState] = useState(true)
    function hide(){
        setState(false)
    }

    function show (){
        setState(true)
    }

    function toggle () {
        if(data == true){
            setState(false)
        }
        else{
            setState(true)
        }
    }
  return (
    <div>
        {
            data?<h1>Hello</h1> : null
        }
        <button onClick={hide}>Hide</button>
        <button onClick={show}>show</button>
        <button onClick={toggle}>toggle</button>
    </div>
  )
}
