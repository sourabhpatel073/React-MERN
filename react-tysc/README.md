
typescript basics
let a:number=2

let b:string="hello"

let arr:number[]=[1,2,3,4]
or let arr:Array<number>=[1,2,3,4]
           or
 let arr:string[]=["a","b","c"]   

 //object
 let obj:user ={
    name:"wourabh",
    id:21,
    score:0.7,
    address:"sohagpur"
 }     

type user={name:string,id:number,address:string,score:number}

// array of object 


let daatbase:Array<user>=[{name:"wourabh",
    id:21,
    score:0.7,
    address:"sohagpur"},name:"wourabh",
    id:21,
    score:0.7,
    address:"sohagpur"]



//union and intersection
let a:number|string=2
a="a"
a=10

//intersection

type user={name:string, id:number,age:number}
type developer={name:string, role:string}

let ia:user&developer={
    name:"abc",
    id:1,
    age:25,
    role:"frontend"
}
ye dono ka  property leta h

let ia:user|developer={
    name:"abc",
    id:1,
    age:25,
    role:"frontend"
}
any you can take


<------  function --------->
function sum(a:number,b:number){
    return a+b
}
typescript with react

installing=>npx create react-app --template typescript






<-----Tuple------>
arr of indexes of varios types

type user2=[string,number,number,string]
let u1:user2=["abc",23,5,"street 1"]



create components folder
-TodoApp.tsx
-TodoInput.tsx
-TodoItem.tsx

install axios and db.json
=>in the package.json 
"server":"json-server --watch db.json --port 8080"