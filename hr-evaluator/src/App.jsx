import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Layout from './components/Layout/layout'
import Dashboard from './pages/EvaluateStart/evaluatestart'
import LogInLanding from './Login/loginlanding'



const App = () => {
  return (
    <div className='dashboard'>
        <BrowserRouter>
          <Routes>
              <Route path='/' element={<LogInLanding/>}></Route>
                <Route path='/dashboard' element={<Dashboard/>}/>
                <Route path='/home' element={<Layout/>}/>

               

              
          </Routes>      
        </BrowserRouter>
    </div>
  )
}

export default App