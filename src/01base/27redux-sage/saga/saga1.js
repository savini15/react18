import {take,fork,pull,call, put} from 'redux-saga/effects'
//监听一个action
export default function *WatchSaga(){
    while(true){
     console.log('saga watch')
     yield take('addCount') //监听组件发来的action
     yield fork(addTimeOut) //立即执行异步函数
    }
}

function *addTimeOut(){
    const res = yield call(getData)  //执行异步操作.返回值是一个promise对象的函数
    console.log('res----',res)
    yield put({ //返回新的action,等到call 执行完毕
        type:'add'
    })
    
}


function getData(){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([123])
        },100)
        
    })
    
}