import Store from './store'
import Child from './child'
Store.subscribe(()=>{
    console.log('在根组件下订阅监听')
})

export default function App(){
    return (<div>

        <Child></Child>
    </div>)
}