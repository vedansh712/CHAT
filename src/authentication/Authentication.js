import { useState } from "react"
import React from 'react'
import "./Authentication.css"
import Login from './Login'
import Signup from './Signup'

function Authentication() {
    const[active,setActive] = useState("login")

    const handleChange = ()=>{
        setActive(active === "login" ? "signup" : "login")
    }
  return (
    <div className='auth'>
        <div className="auth_left">
            <img src="https://i.ibb.co/4TJfksD/marquee-mobile-das-g939447574-removebg-preview.png" alt="" />
        </div>
        <div className="auth_right">
                {active === "login" ? (<Login/>) : (<Signup/>)}
            <div className="auth_more">
                
                <span>
                {active === "login" ? (<> Don't Have An Accout ? <button onClick={handleChange}>Signup</button></>) : (<>Do Have An Accout ? <button onClick={handleChange}>Login</button></>)}
                </span>
            </div>
   
        </div>

    </div>
  )
}

export default Authentication