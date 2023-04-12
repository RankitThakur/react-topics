import React from 'react'

function FunctionClick() {
    function updateEvent (){
        console.log('hello event')
    }
  return (
    <div>
        <h1>Event handling</h1>
        <button  onClick={()=> updateEvent()}>Click Me</button>
        <h1>----------------------</h1>
    </div>
  )
}

export default FunctionClick