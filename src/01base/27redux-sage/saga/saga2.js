import {call, put,takeEvery} from 'redux-saga/effects'
//监听一个action
export default function *WatchSaga(){
    // while(true){
    //  console.log('saga watch')
    // //  yield take('minCount') //监听组件发来的action
    // //  yield fork(minTimeOut) //立即执行异步函数
    // }
    //简写
    yield takeEvery('minCount',minTimeOut)
}

function *minTimeOut(){
    const res = yield call(getData)  //执行异步操作.返回值是一个promise对象的函数
    let rs2 = yield call(getData,res) // 连续调用  链式调用
    
    console.log('res----',res,rs2)
    yield put({ //返回新的action,等到call 执行完毕
        type:'min'
    })
    
}


function getData(data){
     data = data?data:[ ]
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve([123,...data])
        },100)
        
    })
    
}