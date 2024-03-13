import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
    </div>
  )
}

export default Navbar
