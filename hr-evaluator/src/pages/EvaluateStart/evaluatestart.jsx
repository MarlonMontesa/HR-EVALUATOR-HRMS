import React, { useState } from 'react'
import css from './evaluate.module.css'
import { useNavigate } from 'react-router-dom'


const evaluatestart = () => {

    const [employee_Name, setEmployee_Name] = useState("")
    const [address, setAddress] = useState("")
    const [age, setAge] = useState("")
    const navigate = useNavigate()

  return (
    <div className={css.container}>
    <div className={css.title}>
        <h1>Evaluation starter</h1>
    </div>
    
    <div className={css.form}>
       <form action="">
            <label htmlFor="">Employee Name</label>
            <input type='text' value={employee_Name} onChange={(e) => setEmployee_Name(e.target.value)} ></input>
            <label htmlFor="">Address</label>
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
            <label htmlFor="">Age</label>
            <input type="number" value={age} onChange={(e)=> setAge(e.target.value)} />

            <button>SAVE</button>
       </form>
    </div>

    <div className={css.title}>
    <h1>Evaluation Lists</h1>

    </div>

    <div className={css.form}>
       
    </div>

    </div>
  )
}

export default evaluatestart