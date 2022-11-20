import React from 'react';

let appContext = React.createContext()
export default class App extends React.Component {
   
    render() { 
      
        return ( 
            <appContext.Provider value={{a:123}}>
            <div>
                12--- 
                <A/>
            </div>
            </appContext.Provider>
         );
    }
}

class A extends React.Component{
    static contextType = appContext
render(){
    return (

        <div>

           {this.context.a}

        </div>
    )
}
}
 