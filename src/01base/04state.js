//react 没得响应式，必须通过setState 去更新
// 但是setState 的处理又是异步的，那更新的时候怎么确认是更新哪个组件？？？
//  setState 怎么标记组件？？==》render 调用
import React from "react";
export default class App extends React.Component{
    // constructor(){
    //     super()
    //     this.state ={
    //         name:'hheh',
    //         show:true
            
    //     }
    // }

    state ={
        name:'hheh',
        show:true
        
    }
}