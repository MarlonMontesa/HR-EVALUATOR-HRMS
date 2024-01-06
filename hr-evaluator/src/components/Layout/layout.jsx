import React from 'react'
import css from './Layout.module.css'
import SideBar from '../SideBar/sidebar'
import moment from 'moment/moment'
import { FaUserAlt } from "react-icons/fa";
import {Navigate, Outlet, useLocation} from 'react-router-dom'


const layout = () => {

    const {pathName} = useLocation()

  return (
    <div className={css.container}>
        <SideBar/>
        {pathName ==='/'? <Navigate to="/dashboard"/> :""}

    <div className={css.dashboard}>
      <div className={css.header}>
        <span>{moment().format("dddd, Do MMM YYYY")}</span>

        <div className={css.profile}>
            <FaUserAlt />
            <div className={css.details}>
              <span>Marlon Montesa</span>
              
              </div>
        </div>
      </div>


      <div className={css.content}>
                <Outlet/>
                </div>
    </div>
      




    </div>
  )
}

export default layout