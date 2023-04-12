import { useState } from "react"

export function PostApi () {
    const [userId, setName] = useState('');
    const [id, setEmail] = useState('');
    const [title, setNumber] = useState('');
    function saveUser () {
        console.log({userId, id, title})
        let data = {userId, id, title} 
        fetch('https://jsonplaceholder.typicode.com/comments', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body : JSON.stringify(data)
        }).then((res)=> {
            console.log(res)
        });
    }
    return (
        <>
     <h1>Post API Data</h1>
     Name: <input type="text" name="userId"  value={userId} onChange={(e)=> setName(e.target.value)}/><br/>
     Email:  <input type="text" name="id" value={id} onChange={(e)=> setEmail(e.target.value)} /><br/>
     Mobile: <input type="text" name="title" value={title} onChange={(e)=> setNumber(e.target.value)} /><br/>
     <button onClick={saveUser} type="button">Save new User</button>
        </>  
    )
}