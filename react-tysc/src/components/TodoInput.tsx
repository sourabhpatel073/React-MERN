import { useState } from "react";

export default function TodoInput (){
const [title,setTitle]=useState<string>("")

function handleChance(e:React.ChangeEvent<HTMLInputElement>){
    setTitle(e.target.value)
}

function handlesub(e:React.FormEvent<HTMLFormElement>){
  e.preventDefault()
  console.log(title)
  setTitle("")
}
return <div>
    <form onSubmit={handlesub}>
        <input type="text" placeholder="title" onChange={handleChance}> </input>
        <button>Add Todo</button>
    </form>
</div>
}