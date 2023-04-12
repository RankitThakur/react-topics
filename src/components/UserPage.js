import { useParams } from "react-router"
import { Link } from 'react-router-dom'
import './UserPage.css'
import { NavBar  } from "./routers/NavBar"
 

export function  UserPage(){
    let params = useParams()
    let {test}  = params
    console.log(test)
    return (
        <div>
                <NavBar/>
        <h1>hello {params.name}</h1>
        <button className="btn">
        <Link to="/home">Back To Home</Link>
        </button>
        </div>
    )
}