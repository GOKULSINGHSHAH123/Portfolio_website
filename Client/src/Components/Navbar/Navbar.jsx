import React, { useState } from 'react'
import './Navbar.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

const Navbar = () => {

  const [menu, setMenu] = useState("home")
  return (

    <div className="navbar-container">

      <div className='Navbar'>



        <p><span>GOKUL </span>SINGH</p>

        <ul className='navbar-menu'>
          <img className="nav-mob-closed" src={menu_close} alt="" />

          <li onClick={() => setMenu("home")}><AnchorLink className='anchor-link' href="#home">
            Home</AnchorLink>
            {menu === "home" && <hr />}</li>

          <li onClick={() => setMenu("about")}><AnchorLink className='anchor-link' offset={10} href="#about">
            About me</AnchorLink>
            {menu === "about" && <hr />}
          </li>

          <li onClick={() => setMenu("services")}><AnchorLink className='anchor-link' offset={50} href="#skills">
            Skills</AnchorLink>
            {menu === "services" && <hr />}
            </li>

          <li onClick={() => setMenu("Projects")}><AnchorLink className='anchor-link' offset={50} href="#Projects">
            Projects</AnchorLink > {menu === "Projects" && <hr />}</li>

           
        </ul>
        
        <div>
        <img className='nav-mob-open' src={menu_open} alt="" />

        </div>


      </div>

    </div>

  )
}

export default Navbar