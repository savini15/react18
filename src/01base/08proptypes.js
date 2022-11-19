
import React from "react";
import PropTypes from 'prop-types'
export default class App extends React.Component{

static propTypes ={
    a:PropTypes.number,
    b:PropTypes.string,
    c:PropTypes.bool,
}
 static defaultProps={
    c:true
 }



   render(){
    var {a,b,c} =this.props
    return(

        <div>
            <span>{a}</span>
            <span>{b}</span>
            <span>{c?"hhhhhh":''}</span>
        

        </div>
    )
   }
}