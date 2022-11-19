
import React from "react";
export default class App extends React.Component{
// 18版本中的setSate 是异步的，
// 18 之前 setState  在同步中是异步的，在异步中是同步的
   state={
    num:1
   }

   add = ()=>{
    this.setState({
        num: this.state.num +1
    })

    console.log(this.state.num)
    this.setState({
        num: this.state.num +1
    })

    console.log(this.state.num)
    this.setState({
        num: this.state.num +1
    })

    console.log(this.state.num)
   }




   add2 = ()=>{

    setTimeout(()=>{
        this.setState({
            num: this.state.num +1
        })
    
        console.log(this.state.num)
        this.setState({
            num: this.state.num +1
        })
    
        console.log(this.state.num)
        this.setState({
            num: this.state.num +1
        })
    
        console.log(this.state.num)
    },12)
   
   }


   render(){
    return(

        <div>
            <span>{this.state.num}</span>
      <button onClick={this.add}>add</button>
      <button onClick={this.add2}>add22</button>
        

        </div>
    )
   }
}