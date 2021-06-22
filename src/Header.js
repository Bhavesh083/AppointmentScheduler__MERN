import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <div className='header'>
            <Link to='/' className='header-link' ><h3>Scheduler</h3></Link>
            <Link to='/appointments' className='header-link' ><h3>Appointments</h3></Link>
        </div>
    )
}

export default Header
