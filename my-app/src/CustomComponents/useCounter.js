
import React, { useState } from 'react'

function useCounter(initval) {

  const[count,setCount]=useState(initval)
  
  const add=()=>{
    setCount(count+1)
  }

   const reduce=()=>{
    setCount(count-1)
   }
  return (
  [count,add,reduce]
  )
}

export default useCounter



// import { useState } from "react"

// let sum=(a,b)=>{
//     return a+b
// }

// let setInitialval=(value=0)=>{
//     return value
// }
// export default function UseStateExample (){
// const [count,setCount]=useState(setInitialval)
// return<div>
//     <h1>{count}</h1>
//     <button onClick={()=>{
//         setCount(count+1)

//     }}>add</button>
// </div>
// }


