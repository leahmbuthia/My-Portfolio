import React from 'react'
import './Navbar.scss'
import MenuItems from './MenuItems'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="logo">
        <h1>Leah . cv</h1>
        </div>
        <div className="menus">
    <Link className='MenuItems'>ABOUT</Link>
    <Link className='MenuItems'>SKILLS</Link>
    <Link className='MenuItems'>PORTFOLIO</Link>
    <Link className='MenuItems'>EXPRIENCE</Link>
    <Link className='MenuItems'>CONTACT</Link>
        </div>
        
    </div>
  )
}

export default Navbar