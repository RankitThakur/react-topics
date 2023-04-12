import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Login() {
  const [user, userID] = useState('')
  const [userPass, userPassWord] = useState('')
  const [userErr, err] = useState(false)
  const navigator = useNavigate()
  let auth;

  function handleEvent (e) {
    console.log(user)
    console.log(userPass)
    e.preventDefault()
  }

  function userChecked (e) {
    if(e.target.value.length<3){
      err(true)
    }
    else{
      debugger
      auth = true
      err(false)
    }
  }

  function loginAuth(){
    
  if(auth){
    navigator('/home')
  }
  }

  return (
    <div>
      <form onSubmit={handleEvent}>
      Enter Your ID<input type="text" onChange={userChecked}/> {userErr ? <span>Invalid name</span> : ''}<br></br>
      Enter Your Password<input type="password" onChange={(e)=> { userPassWord(e.target.value)}} /><br></br>
      <button onClick= {loginAuth} type="submit">Login</button>
      </form>
    </div>
  )
}
