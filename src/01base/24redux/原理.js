// redux 对外暴露一个createStore 方法,返回一个对象，
//对象中

// 大概模拟一下createStore
let initState = {count:0}

function reducer(prevState=initState,action={}){
    let newState = {...prevState}
    switch(action.type){
        case 'add':
            newState.count++
        return newState

        default:
            return prevState
    }
}

function createStore(reducer){
    let state = reducer()
    let subscribeList =[]

    function subscribe(callback){
        subscribeList.push(callback)
    }

    function dispatch(){
        reducer()
        subscribeList.forEach((list)=>{
         list && list()
        })
    }

    function getState(){
        return state
    }

    return {
        state,
        subscribe,
        dispatch,
       getState,
        subscribeList
    }
}

const store = createStore(reducer)

store.subscribe(()=>{
    console.log('订阅监听')
})

store.dispatch({type:'add'})