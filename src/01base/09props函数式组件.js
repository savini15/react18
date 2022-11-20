import React from "react";
import PropTypes from 'prop-types'
export default function App(props){
let {a,b,c} = props
}

App.propTypes ={
    a:PropTypes.number,
    b:PropTypes.string,
}
App.defaultProps={
    c:true
 }