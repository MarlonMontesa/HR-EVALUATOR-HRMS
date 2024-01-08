import React, { useState } from 'react'
import css from './SideBar.module.css'
import { NavLink } from 'react-router-dom'
import { GrPerformance } from "react-icons/gr";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import Logo from '../../../public/brand.png'

const sidebar = () => {
  const [nav, setNav] = useState(false)

  const clickNav = () =>{
    setNav(!nav)
  }

  return (
    <div className={css.container}>
        <img src={Logo} alt="logo" className={css.logo}/>

        <div className={css.menu}>
            
              <FaArrowRight onClick={clickNav} size={30}/>
              {nav?(
                  <div className='css.hidden-nav'>
                    <div className='css.nav-item'>
                    <NavLink to="dashboard" className={css.item} title={"Dashboard"}>
                      <a>evaluation1</a>
                    </NavLink>
                    </div>
                    <div className='css.nav-item'>
                      <a>evaluation2</a>
                    </div>
                    <div className='css.nav-item'>
                      <a>evaluation3</a>
                    </div>
                    <div className='css.nav-item'>
                      <a>evaluation4</a>
                    </div>
                  </div>

                )
                :("")}

        </div>

    </div>
  )
}

export default sidebar