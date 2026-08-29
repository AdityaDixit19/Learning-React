import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <nav className='mt-10 flex justify-center gap-10'>
        <NavLink 
         className={({isActive}) => isActive ? "text-red-500 font-bold" : ""}
         to="/" >Home</NavLink> 


        <NavLink style={(e)=>{
            return {
                color:e.isActive ? "red" : "",
                fontWeight:e.isActive ? "bold" : ""
            }
        }} to="/user" >User</NavLink>


        <NavLink  to="/about" >
        {(e)=>{
            return (
            <span 
                className={[ e.isActive ? "text-red-500" : "",
                e.isActive ? "font-bold" : ""].join(" ")}
            > About
            </span>
            )

        }} 
        </NavLink>
    </nav>
  )
}

export default Nav
