
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
             

            </div>
        );
    }
}
class Child extends Component {
    state={
        name:888
    }

    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log('getSnapshotBeforeUpdate',prevProps,prevState)
        return {}
    }
   static getDerivedStateFromProps(nextProps,nextState){
  //static 中无法使用this
    console.log(nextProps,nextState)
    return {
        name:123
    }
   }


   componentDidUpdate(prevProps,prevState,shotSnap){

   }
    render() { 
        return (

            <div>
         child---{this.state.name}

            </div>
        );
    }

}

 
export default App;