
import Child from './child'
import store  from './store'

import {useState} from 'react'
// 这也不用写了？  // 要根据改变需要走后续操作的时候要写

export default function App(){
let [count,setCount] = useState(store.getState().count)
store.subscribe(()=>{
    console.log('在根组件下订阅监听')
    //可以做一些业务处理

    setCount(store.getState().count)
})
    return (<div>
        <p>hhhhhh{store.getState().count}</p>
        <Child  count={count}></Child>
    </div>)
}