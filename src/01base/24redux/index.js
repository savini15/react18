import Store from './store'
import Child from './child'
import store  from './store'
// 这也不用写了？
store.subscribe(()=>{
    console.log('在根组件下订阅监听')
    //可以做一些业务处理
})

export default function App(){
    return (<div>
        <p>hhhhhh{store.getState().reducer1.count}</p>
        <Child></Child>
    </div>)
}