
import React, { Component } from 'react';

// 1.插槽可以提高组件的复用性
//2. 可以进行父子组件通信优化，可以将更新内容集中放在父组件，子组件主要负责渲染
class App extends  Component {
    state = {  }
    render() { 
        return (  

            <div>
                <A>
                    <h2>hello</h2>
                    <h1>111</h1>
                    <h3>33</h3>
                </A>
            </div>
          );
    }
}
 class A extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                {this.props.children[0]}
                {this.props.children[1]}
                {this.props.children[2]}
            </div>
        );
    }
 }
export default App;