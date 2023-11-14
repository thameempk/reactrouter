import React, {  useState } from 'react'
function Sign({handleSign, details}) {
  const [signEmail, setSignEmail] = useState("")
  const [signPass, setSignPass] = useState("")
  

  return (
    <div className='container' style={{height:"400px"}}>
      <h1>Login</h1>
      Email:
      <input type="text" onChange={(e)=>setSignEmail(e.target.value)}/>
      <br />
      Password:
      <input type="password" onChange={(e)=>setSignPass(e.target.value)}/>
      <br />
      <button onClick={()=>handleSign(signEmail,signPass)}>sigin</button>
      <h1>{details}</h1>
    </div>
  )
}

export default Sign