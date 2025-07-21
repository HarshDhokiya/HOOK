
import React, { useState } from 'react'

function WelCome() {

   const [name,SetName] =useState('');

  return (
    <>
    <div><h3>WelCome {name ? name :"Mishti❤️"}</h3></div>
    <input type='text' onChange={(e)=>SetName(e.target.value)} placeholder='Enter your name...'/>
   </>

  )
}

export default WelCome