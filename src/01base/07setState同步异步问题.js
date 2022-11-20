
import React from "react";
export default class App extends React.Component{
// 18版本中的setSate 是异步的，
// 18 之前 setState  在同步中是异步的，在异步中是同步的
   state={
    num:1,
    num2:1,
   }

   add = ()=>{
    this.setState({
        num: this.state.num +1
    })

    console.log('num1----',this.state.num)
    this.setState({
        num: this.state.num +1
    })

    console.log('num1----',this.state.num)
    this.setState(function(){
        return {
            num: this.state.num +1
        }
    })

    console.log('num1----',this.state.num)

    this.setState({
        num2: this.state.num2 +1
    })

    console.log('num2----',this.state.num2)
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
            <h1>{this.state.num}</h1>
            <h1>{this.state.num2}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.add2}>add22</button>
        

        </div>
    )
   }
}