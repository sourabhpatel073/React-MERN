import { useEffect, useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0)
  function   handleAdd(vale){
     setCount(count+vale)
     console.log("component updated")
    }

    useEffect(()=>{
console.log("component mounted!");

return ()=>{
    console.log("component unmounted")
      }
    }
   
    ,[])

    useEffect(()=>{
        if(count!=0){
            console.log("count updated")
        }
            }
            ,[count])
    return <div>
    <h2>counter app </h2>
        <h2>{count}</h2>
        <button onClick={()=>{handleAdd(1)}}>add</button>
        <button onClick={()=>{handleAdd(-1)}}>reduce</button>
    </div>
}