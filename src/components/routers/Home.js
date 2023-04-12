import { BrowserRouter, Link, NavLink, useNavigate } from "react-router-dom"
import { Route, Routes } from 'react-router';
import Login from "../Login";
import './home.css'
import { NavBar } from "./NavBar";
import About from "./About";

function Home () {
    let navigat = useNavigate()
    return <div>
    <NavBar/>
    <h1>home page</h1>
    <button onClick={()=>navigat('/user/:rankit')}>about page</button>
    </div>
}
export default Home