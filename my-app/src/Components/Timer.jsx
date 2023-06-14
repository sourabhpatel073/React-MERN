import { useEffect, useState } from "react";

export default function Timer(){
const [time, setTime]=useState(10)
const [isRunning, setIsRunning] = useState(false);

let id
useEffect(()=>{
    if(isRunning){

    id=setInterval(()=>{
        setTime((prev)=>{
            if(prev<1){
                clearInterval(id)
                return 0
            }
            return prev-1
        })

    },1000)
    }
    return ()=>{clearInterval(id)}
},[isRunning])

return <div>Timer{time}
<button onClick={()=>{setTime(10)
 setIsRunning(false)
}}>reset</button>
<button onClick={()=>{setIsRunning(!isRunning)}}>start</button></div>
}