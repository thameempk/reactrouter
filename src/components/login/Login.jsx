import React, { useState } from 'react'
import "./Login.css"
function Login(props) {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    
    
  return (
    
    <div className='container'>
      <h1>Sign Up</h1>
        Name:
        <input type="text" onChange={(e)=>setName(e.target.value)}/>
        <br />   
        Email:    
        <input type="text" onChange={(e)=>setEmail(e.target.value)}/>
        <br />
        Password:
        <input type="password" onChange={(e)=>setPass(e.target.value)}/>
        <br />
        <button onClick={()=>props.handleChange(name,email,pass)}>click</button>
        <p>{props.alert}</p>
    </div>
  )
}

export default Login