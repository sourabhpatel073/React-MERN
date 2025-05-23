import React, { useEffect, useState } from 'react'
import Child from './Child'



function Display({screen}){
return <p>{screen}</p>
}

function Parent() {
    const[count, setCount]=useState(0)

    useEffect(()=>{

    },[ ])
  return (
    
    <div>
      <Display screen={count}></Display>
      <button onClick={()=>{setCount(count+1)}}>add</button>
    </div>
   
  )
}

export default Parent
