import React from 'react';

let {Provider,Consumer} = React.createContext()
export default class App extends React.Component {
    render() {
        return ( 
            <Provider value={{a:123}}>
            <div>
                helllo 
                <A/>
            </div>
            </Provider>
         );
    }
}

class A extends React.Component{
render(){
    return (
        <Consumer>
        {
            (value)=><div>斤斤计较 --{value.a }</div>
        }
        </Consumer>
    )
 }
}
 