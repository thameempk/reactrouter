import React from 'react'

function Home({setSdetails}) {
  let name = localStorage.getItem("name")
  const handleLogout = () =>{
    setSdetails({})
    localStorage.clear()
  }
  return (
    <>
    <h1 style={{color:"white"}}>hai welcome {name}</h1>
   <button onClick={handleLogout}>logout</button> 
    
    </>
  )
}

export default Home