
import React, { Component } from 'react';

class App extends Component {
    state = { 
       currentType:1
     } 
    render() { 
        return (

            <div>

                <ul>
                    <li  onClick={ ()=>{
                        this.setState({
                             currentType:1
                        })
                    }}>
                        1
                    </li>
                    <li  onClick={ ()=>{
                        this.setState({
                             currentType:2
                        })
                    }}>
                        2
                    </li>
                </ul>
             <Child type={this.state.currentType}/>
             {
                this.state.currentType ===1 && <Child2/>
             }

            </div>
        );
    }
}
class Child extends Component {
    state = {  
        typeCheck:true
    } 

    UNSAFE_componentWillReceiveProps(nextProps){
     console.log('nextProps',nextProps)

      if(nextProps.type===1){
          this.setState({
            typeCheck:true
          })
      } else {
        this.setState({
            typeCheck:false
          })
      }
    }
    render() { 
        return (

            <div>
         {this.state.typeCheck? 'hello':'报错了'}

            </div>
        );
    }

}

class Child2 extends Component {
   

 
    render() { 
        return (

            <div>
        child 2---

            </div>
        );
    }

    componentWillUnmount(){
        console.log('hjjh')
    }
}
 
export default App;