import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "./Navbar.css"
import { MyContex1 } from '../../App'
function Navbar({sdetails}) {
  const navigate = useNavigate();
  const user = useContext(MyContex1)
  const handleTrue =()=>{
    if(user.email && user.pass !== ""){
      navigate('/')
    }
  }
  return (
   <div className='container-fluid'>
    <ul>
        <li><Link to={"/"} className='text'>Home</Link></li>
        <li onClick={handleTrue}><Link to={"/login"}  className='text' >Sign Up</Link></li>
        <li onClick={handleTrue}><Link to={"/sign"}  className='text' >Sign in</Link></li>
        
    </ul>
   </div>
  )
} 

export default Navbar
