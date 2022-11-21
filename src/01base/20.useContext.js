import React, { useContext } from 'react';
let gContext =React.createContext()
export default function App(){

    return (
   <gContext.Provider value ={{
    a:1,
    b:777
   }}>

        <Child></Child>
   </gContext.Provider>
       
    )
}

export function Child(){
    let childContext = useContext(gContext)

    return (
        <div>

            <span>a------{childContext.a}</span>
            <br></br>
            <span>b-----{childContext.b}</span>
        </div>
    )

}