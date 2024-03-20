import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className="nav navbar  navbar-dark bg-primary d-flex justify-content-center">
        <ul className='navbar-nav d-flex flex-row justify-content-center'>
            <li className='nav-item'><Link to="/" className="mx-3 nav-link">HOME</Link></li>
            <li className='nav-item'><Link to="/about-us" className="mx-3 nav-link">ABOUT US</Link></li>    
        </ul>
    </nav>
  )
}

export default Navigation