
import React from "react";
export default class App extends React.Component{

   state={
    num:1
   }

   add = ()=>{
    const {num} =this.state
    this.setState({
        num: num +1
    })

    console.log(this.state.num)
    this.setState({
        num: num +1
    })

    console.log(this.state.num)
    this.setState({
        num: num +1
    })

    console.log(this.state.num)
   }




   add2 = ()=>{

    setTimeout(()=>{
        const {num} =this.state
        this.setState({
            num: num +1
        })
    
        console.log(this.state.num)
        this.setState({
            num: num +1
        })
    
        console.log(this.state.num)
        this.setState({
            num: num +1
        })
    
        console.log(this.state.num)
    },0)
   
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