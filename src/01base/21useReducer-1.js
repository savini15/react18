import React, { useState, useReducer } from 'react';

// 单组件的使用
//把reducer处理函数和state 对象放在外部

function reducer(prevState,action){
    let newState = {...prevState}
   switch(action.type){
         case 'add':
            newState.count++
            return newState
            case 'min':
                newState.count--
                return newState
        default:
            return prevState
   }
}


let stateObj ={
    count:0
}


export default function App(){
    //创建组件中的state和对应的方法

    let  [state,dispatch] = useReducer(reducer,stateObj)

    function add(){


        dispatch({type:'add'})
    }

    function min(){
        dispatch({type:'min'})
    }
    return (
        <div>

       <button onClick={add}>Add</button>
       <h3>{state.count}</h3>
       <button onClick={min}>min</button>

        </div>
    )
}
