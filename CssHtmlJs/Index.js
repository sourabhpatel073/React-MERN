let todos=JSON.parse (localStorage.getItem("todos"))||[]
function AddTodo(){
   
    let title=document.getElementById("input").value
    let Todo={"title":title,stats:false}
   
    todos.push(Todo)
    localStorage.setItem("todos",JSON.stringify(todos))
    console.log(todos)
    render()
}

function render(){
    let box = document.getElementById("box");
    box.innerHTML = ''
    todos.forEach((element,index) => {
        let div=document.createElement("div")
        div.setAttribute("id","todo")
        let title=document.createElement("h1")
        title.setAttribute("id","title")
        title.innerHTML=element.title
        let tododiv=document.createElement("div")
        tododiv.setAttribute("id","todoDiv")
        let toggle=document.createElement("button")
        toggle.setAttribute("class","toggle")
        toggle.innerText="toggle"
        let deletebtn=document.createElement("button")
        deletebtn.setAttribute("class","delete")
        deletebtn.innerText="delete"
        deletebtn.addEventListener("click", () => deleteTodo(index))
        tododiv.append(toggle,deletebtn)
        div.append(title,tododiv)
        let box=document.getElementById("box")
       
        box.append(div)
    });
}


// document.getElementById("AddTodoButton").addEventListener("click",AddTodo)

function toggleTodoStatus(index) {
    todos[index].title = !todos[index].title; // Toggle the stats property of the corresponding todo
    render();
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
  }
  
  function deleteTodo(index) {
    todos.splice(index, 1); // Remove the corresponding todo from the array
    
    localStorage.setItem("todos", JSON.stringify(todos));
    render();
  }
  
  render()