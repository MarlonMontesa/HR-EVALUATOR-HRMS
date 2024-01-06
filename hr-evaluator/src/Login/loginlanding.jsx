import React, { useState } from 'react'
import css from './loginlanding.module.css'
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom"


const loginlanding = () => {

    
  return (
        <div className={css.container}>
            <div className={css.imageblur}>

            </div>
            <div className={css.landinglogin}>
                <div className={css.landing}>
                        <img src="" alt="logo" />
                        

                </div>
                <hr />
                <div className={css.loginroute}>
                    <div>
                      <h1>Log In</h1>
                    </div>
                    <div>
                      <form action="">
                        <div>
                          <label htmlFor="">Id Number</label>
                          <input type="number" />
                        </div>
                        <div>
                          <label htmlFor="">Password</label>
                          <input type="number" />
                        </div>
                        <NavLink to="home">
                              <button>Login</button>
                            </NavLink>
                      </form>
                    </div>
                </div>

            </div>

        </div>
    
  )
}

export default loginlanding