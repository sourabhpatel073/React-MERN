import React, { useEffect, useState } from 'react'
import Child from './Child'

function Parent() {
    const[count, setCount]=useState(0)

    useEffect(()=>{

    },[ ])
  return (
    
    <div>
      <Child count={count}></Child>
      <button onClick={()=>{setCount(count+1)}}>add</button>
    </div>
   
  )
}

export default Parent
