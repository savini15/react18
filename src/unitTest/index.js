import React ,{useState,useRef}from 'react'
export default function App() {
const list = ['a']
let [todoList,SetList]=useState(list)
let myInput = useRef('')
  return (
    <div>
        <h1>todo</h1>
       <input type='text' ref={myInput}/>

       <button onClick={()=>{
        SetList([...todoList,myInput.current.value])
       }}>Add</button>



       <hr></hr>

       {
        todoList.map((i,index)=>{
           return (

           <p key={index}>
             <li>{i}</li>
            <button  onClick={()=>{
              console.log(i)

              todoList.splice(index,1)


              SetList([...todoList])
            }}>del</button>
           </p>
           )
        })
       }


    </div>
  )
}
