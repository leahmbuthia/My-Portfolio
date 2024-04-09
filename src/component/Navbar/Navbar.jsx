import React from 'react'
import './Navbar.scss'
import MenuItems from './MenuItems'

const Navbar = () => {
  return (
    <div>
        <div className="logo">
        <h1>Leah . cv</h1>
        </div>
        <div className="menus">
        <MenuItems/>
        </div>
        
    </div>
  )
}

export default Navbar