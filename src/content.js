import React, { useState } from 'react'
import Display from './display'

const Content = () =>{
    const[show,setShow]=useState(false)
  return(
  <>
   <button onClick={()=>setShow(!show)}>Click to see content</button>
   {show && <Display/>}
  </>
  )
}

export default Content