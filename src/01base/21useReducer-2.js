import React, { useContext, useReducer } from 'react';


// 父子级，跨级组件组件的使用:与createContext useContext配合使用
//把reducer处理函数和state 对象, 
//公共的globalContext 放在外部

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


let globalContext =React.createContext()

export default function App(){
    //创建组件中的state和对应的方法

    let  [state,dispatch] = useReducer(reducer,stateObj)

    return (

        <globalContext.Provider value={{
            state,
            dispatch
        }}>

            <Child1></Child1>
        </globalContext.Provider>
       
    )
}


export  function Child1(){
    //创建组件中的state和对应的方法

    let  {state,dispatch} = useContext(globalContext)

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

       <hr></hr>
       <Child2></Child2>

        </div>
    )
}



export  function Child2(){
    //创建组件中的state和对应的方法

    let  {state,dispatch} = useContext(globalContext)

    

    function min(){
        dispatch({type:'min'})
    }
    return (
        <div>
         child2-----
       <h3>{state.count}</h3>
       <button onClick={min}>min</button>

        </div>
    )
}