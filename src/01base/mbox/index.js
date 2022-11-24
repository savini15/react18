// 基础使用
import { observable,autorun } from 'mobx';
import { useEffect } from 'react';
import store from './store';
// import { inject, observer } from 'mobx-react'
// @inject('store')
// @observer;
export default function App (){
    let a = observable.box(10)
    //第一次和执行内容里的的变量改变时执行
    autorun(()=>{
        console.log(a.get())
    })
    setInterval(()=>{
        a.set(20)
    },100)

    let obj = observable.map({a:99,b:77})
    autorun(()=>{
        console.log('onj a',obj.get('a'))
    })

     
    let obj2 = observable({a:99,b:77})
    autorun(()=>{
        console.log('onj2 a',obj2.a)
    })


    useEffect(()=>{

        autorun(()=>{
           
        store.add()
        })
    },[])
    return (
        <div>
            <span>{a.get()}</span>
            <hr></hr>

            <span>{store.num}</span>
        </div>
    )
}