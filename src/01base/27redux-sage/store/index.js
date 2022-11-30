import { createStore ,combineReducers,applyMiddleware} from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import reducer1 from './reducer'
// import reducer2 from './reducer2'
import createSagaMiddleware from "@redux-saga/core";
// import reduxThunk from 'redux-thunk'

import WatchSaga from './saga'
const saga =createSagaMiddleware()
// const reducer = combineReducers({
//   reducer1,
//   reducer2  
// })
//export default createStore(reducer)
//export default createStore(reducer,applyMiddleware(reduxThunk))
const store = createStore(reducer1,applyMiddleware(saga))

saga.run(WatchSaga)  //saga 帮助监听action 的dispatch，如果是异步就处理了之后再返回plain object的action
export default store