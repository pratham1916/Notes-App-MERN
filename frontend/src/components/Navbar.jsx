import React from 'react'
import { Link } from 'react-router-dom'
import "../Styles/Navbar.css"

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link className='nav-links' to="/dashboard">Dashboard</Link>
        <Link className='nav-links' to="/login">Login</Link>
        <Link className='nav-links' to="/register">Register</Link>
    </div>
  )
}

export default Navbar
