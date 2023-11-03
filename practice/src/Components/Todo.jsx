import React from 'react'

function Todo({content}) {
    let  todos=JSON.parse(localStorage.getItem("todos"))||[]
    function handleDelete(){
      let  newtodos=todos.filter((el)=>{
        return el.title!=content
       })

       localStorage.setItem("todos",JSON.stringify( newtodos)) 
    }
  return (
    <div>
      <h2>{content}</h2>
      <h2></h2>
      <button>Toggle </button> <button onClick={()=>{handleDelete()}}>Delete</button>
    </div>
  )
}

export default Todo
