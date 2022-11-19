
import React from "react";
export default class App extends React.Component{

   arr = ['<b>444</b>','<h1>hello</h1>']
   render(){
    return(

        <div>
         {
            this.arr.map((item,index) => <span key={index} dangerouslySetInnerHTML={
                {__html:item}
            }></span>)
         }
        

        </div>
    )
   }
}