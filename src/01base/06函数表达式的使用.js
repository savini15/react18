
import React from "react";
export default class App extends React.Component{

   arr = ()=>{
    return [1,2,3]
   }
   render(){
    return(

        <div>
         {
           this.arr()
         }
        

        </div>
    )
   }
}