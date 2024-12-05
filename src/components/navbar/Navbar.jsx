import React from 'react'
import { NavLink } from 'react-router-dom'
import "./index.css"
function Navbar() {
  return (
    <nav>
        <NavLink to={"/"}>Collapse</NavLink>
        <NavLink to={"/drawer"}>Drawer</NavLink>
        <NavLink to={"/tabs"}>Tabs</NavLink>
        <NavLink to={"/coin-flip"}>Coin Flip</NavLink>
        <NavLink to={"/bmi-calculator"}>BMI Calculator</NavLink>
    </nav>
  )
}

export default Navbar