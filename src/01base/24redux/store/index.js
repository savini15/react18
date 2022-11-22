import { createStore ,combineReducers,applyMiddleware} from "redux";
// import { configureStore } from "@reduxjs/toolkit";
import reducer1 from './reducer'
import reducer2 from './reducer2'
// import reduxThunk from 'redux-thunk'

const reducer = combineReducers({
  reducer1,
  reducer2  
})
export default createStore(reducer)
// export default createStore(reducer,applyMiddleware(reduxThunk))