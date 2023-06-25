import React, { useRef } from 'react'

function useThrottle(func,delay) {
    const {current:wait}=useRef(false)
  return (e)=>{
    if(wait){return}
    wait=true
   setTimeout(()=>{
    func(e)
    wait=false
   },delay)
  }
}

export default useThrottle
