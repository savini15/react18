import Store from './store'
import { useState } from 'react'
export default function Child (){
    let [count,setCount] = useState(Store.getState().reducer1.count)

    function add(){
        Store.dispatch({type:'add'})

        setCount(Store.getState().reducer1.count)
    }
    return (

        <div>


            <h1>{count}</h1>

            <input onChange={add}/>
        </div>
    )
}