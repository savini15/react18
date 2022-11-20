import { useState } from "react"



export default function App(){
    let [name,setName] =useState(0);
    let [name2,setName2] =useState(0);
    function  add(){
        setName(name +1)
        setName(name +2)
        setName(name +3)
        setName(name +4)
        console.log('name----')//以上四个会执行最后一个
        setName2(name2 +45)
        console.log('name2----')


    }
    return(
        <div>

            <h1>{name}</h1> 
            <h1>{name2}</h1> 
            <button onClick={add}>changeName</button>
        </div>
    )


}