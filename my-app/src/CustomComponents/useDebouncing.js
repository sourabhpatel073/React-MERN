import React, { useEffect, useRef } from 'react'

function useDebouncing(func, delay) {

    let {current:id}=useRef

    return (e)=>{
        id&&clearTimeout(id)
        id=setTimeout(()=>{func(e)},delay)
    }
}

export default useDebouncing

//-------------------debouncing
// import { useRef } from "react"

// export const useDebounce=(func,delay)=>{
// let {current:id}=useRef

// return (e)=>{
//     id&&clearTimeout(id)
//     id=setTimeout(()=>{func(e)},delay)
// }
// }