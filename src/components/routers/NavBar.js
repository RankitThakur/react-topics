import React from "react"
import { NavLink } from 'react-router-dom'
import Home from './Home'
import './home.css'



export function NavBar() {
    return <div>
    <ul className="navbar">
        <li><NavLink className="nav-link-bar" to="/test">Test</NavLink></li>
        <li><NavLink className="nav-link-bar"to="/contact">Contact</NavLink></li>
        <li><NavLink className="nav-link-bar"to="/user/test">UserTest1</NavLink></li>
        <li><NavLink className="nav-link-bar" to="/user/test2">UserTest2</NavLink></li>        <li><NavLink className="nav-link-bar" to="/user/test2">UserTest2</NavLink></li>
        <li><NavLink className="nav-link-bar" to="/login">login now</NavLink></li>

    </ul>
    </div>
}