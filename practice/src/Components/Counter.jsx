// import { useDispatch, useSelector } from "react-redux"
// export default function Counter() {
//   const count=useSelector((state)=>{
//     return state.count
//   })

//   const dispatch=useDispatch()
//     return (
//       <div>
//         <p>Count: {count}</p>
//         <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
//         <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
//       </div>
//     );
//   }

//   import { useDispatch, useSelector } from "react-redux"
// import { AddAction, ReduceAction } from "../Redux/Counter/action"

// export default function Counter(){
//     const count=useSelector((state)=>{
//       return state.counter.counter
//     })
//     console.log(count)
//     const mydispatch=useDispatch()
//     console.log(mydispatch)
//     const HandleAdd=()=>{
//        mydispatch(AddAction(1))
//     }

//     const HandleReduce=()=>{
//        mydispatch(ReduceAction(1))
//     }
//     return<div>
//         <h1>count:{count}</h1>
//         <button onClick={HandleAdd}>Add</button>
//         <button onClick={HandleReduce}>Reduce</button>
//     </div>
// }