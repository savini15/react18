import {all} from 'redux-saga/effects'
import WatchSaga1 from '../saga/saga1'
import WatchSaga2 from '../saga/saga2'

export default function *WatchSaga(){
       yield  all([WatchSaga1(),WatchSaga2()])
       
}