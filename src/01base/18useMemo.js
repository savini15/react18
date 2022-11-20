import { useState,useMemo } from "react"
//某一状态值更新的时候会导致组件重新渲染，组件中的函数会被重新创建，

//useMemo 一个函数 ，用来缓存一个函数
 // 完全可以替代useCallback 的功能
 // 会执行第一个函数，并将执行结果返回

//  useMemo(()=>xxx ,[])
//  useCallback(xxx ,[])

export default function App(){
    let [name,setName] =useState(0);
    let count =0
    //setName 记忆函数，可以记住name值
   const add =  useMemo(()=>{
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