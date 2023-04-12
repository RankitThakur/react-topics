import React, { useState } from 'react'


function Form() {
    const [name, setName] = useState("");
    const [ tnc, setTnc] = useState(false)
    const [ checkBox, setBox] = useState("")
    const [option, setOption] = useState("")

    function getFromData (e) {
        console.log(name)
        console.log(tnc)
        console.log(checkBox)
        console.log(option)

        e.preventDefault()
    }
  return (
    <div>
        <form onSubmit={getFromData}>
            User Name:<input placeholder='Enter name' Style={"padding:2px"} onChange={(e)=> setName(e.target.value) }/><br></br>
            Enter Password: <input type='password' placeholder='enter Password' onChange={(e)=> setName(e.target.value)} /><br></br>
        <select onChange={(e) => setOption(e.target.value)}>
        <option >select option</option>
            <option >male</option>
            <option>female</option>
        </select><br></br>
        <p>Test Data</p>
        <input type="checkbox"placeholder='enter Password' onChange={(e)=>{setBox(e.target.checked)}}/><span>Accept Terms and condition</span><br></br>
        <button type="submit">Submit</button>
       </form>
    </div>
  )
}

export default Form