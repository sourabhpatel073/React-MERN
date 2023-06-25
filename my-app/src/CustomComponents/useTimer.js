import React, { useEffect, useState } from 'react'

function useTimer(initval) {

const [time,setTime]=useState(initval)

useEffect(()=>{
    let id=setInterval(()=>{
  
        setTime((prev)=>{
            if(prev<1){clearInterval(id)
            return 0}
            return prev-1
        })
          
    },1000);

    return ()=>{clearInterval(id)}
},[])

  return (
  [time]
  )
}

export default useTimer
