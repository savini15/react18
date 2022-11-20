
import React from "react";
import PropTypes from 'prop-types'
export default class App extends React.Component{

  input = React.createRef()



   render(){
    
    return(

        <div>
           <input  type='text'  ref={this.input} defaultValue='123'/>

        </div>
    )
   }
}