import React ,{Component} from "react";
import './01.css' //webpack 打包 => head 
export default class App extends Component{
  // react官方推荐使用行内样式，这样就是一个完整的组件
 render(){
  let styleObj={
    background:'yellow'
  }
  return (
    <div style={styleObj}>
      <span>{20-1}</span>
      <span className="test">hello</span>
      {/* 样式属性名要是驼峰形式 */}
      <span style={{fontSize:'34px'}}>hello</span>
{/* htmlFor  */}
    <label htmlFor="i1">嘻嘻嘻：</label>
    <input id='i1'/>

    </div>
  )
 }
}