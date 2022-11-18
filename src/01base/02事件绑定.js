import React ,{Component} from "react";
export default class App extends Component{
  test=()=>{
    console.log('hello')
  }
  test2(){
    console.log('test2---')
  }

  test3(){
console.log(this)
  }
 render(){
  
  return (
    <div>
        {/* 处理逻辑不多时候推荐 */}
        <button onClick={()=>{console.log('hahhah ')}}>test1</button>
        <button onClick={this.test}>add</button>
        {/* 不推荐，要bind this */}
        <button onClick={this.test2}>test2</button>
        {/* 推荐 可以传参 */}
        <button onClick={()=>{this.test3()}}>test3</button>
    </div>
  )
 }
}