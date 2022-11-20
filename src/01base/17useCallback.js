import { useState,useCallback } from "react"
//某一状态值更新的时候会导致组件重新渲染，组件中的函数会被重新创建，
//useCallback 一个函数 ，用来缓存组件里的函数，第二个参数数组依赖项

//如果一个变量（通过useState 产生）只会更新一次，在其他变量更新时候就可以使用
export default function App(){
    let [name,setName] =useState(0);
    let count =0
    //setName 记忆函数，可以记住name值
   const add =  useCallback(()=>{
        setName(name +1)
    //    count++  //count的值并未被记住，页面也不更新
    },[name] // 缓存状态依赖  []就是永远使用缓存
   )

    return(
        <div>

            <button onClick={add}>changeName</button>
            <h1>{name}</h1> 
            <h1>{count}</h1> 
        </div>
    )


}