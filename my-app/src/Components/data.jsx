import React, { useEffect, useState } from 'react'
import useDebouncing from '../CustomComponents/useDebouncing'
import axios from 'axios'
function Data() {
const [qurey,setQurey]=useState("")
const [data,setData]=useState("")
const handleChange=(e)=>{
 setQurey(e.target.value)
}
function getData(){
    axios.get(`https://dummyjson.com/posts/?q=${qurey}`).then((res)=>{
        setData(res.data)
        console.log("hello")
    })
}
useEffect(()=>{
  getData()
},[qurey])

   let debouncFunc= useDebouncing(handleChange,1000)

  return (
    <div>
     <input placeholder='search' onChange={(e)=>{debouncFunc(e)}}></input>
    </div>
  )
}

export default Data
