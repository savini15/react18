import React ,{Component} from "react";
export default class App extends Component{
  show=()=>{
    // console.log(this.refs.test.value)//字符串格式
    console.log(this.test.current.value)
  }

  test=React.createRef()
 render(){
  
  return (
    <div>
      {/* 字符串格式 在严格模式 React.StrictMode 存在潜在风险 命名重复*/}
       {/* <input ref='test'/>

       <button onClick={this.show}>value </button> */}


<input ref={this.test}/>

<button onClick={this.show}>value </button>
    </div>
  )
 }
}