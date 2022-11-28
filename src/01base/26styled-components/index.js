import React, { Component } from 'react'
import styled from 'styled-components'
// export default class App extends Component {
//   render() {

//     const StyledFooter = styled.footer`
    
//     color:red
//     `
//     return (
//       <StyledFooter>App</StyledFooter>
//     )
//   }
// }





export default function index() {

    const StyledFooter = styled.footer`
    
    color:red;
    background:yellow;
    p{
        color:blue
    }
    `
 // 常规组件的设置，
    const MyInput = styled.input`
    border:1px solid red
    `

    ///自定义属性的传值，样式的透传

    const StyleCom = styled.div `
    
      color:${(props)=> props.color};
      background:green
    
    `


    // 样式化组件

   const ChildStyle = styled(Child)`
   
   background:red;
   color:#fff
   `

//样式的扩展

const Btn1= styled.button`
background:blue

`
const Btn2 = styled(Btn1)`
color:#fff
`
  return (
    <StyledFooter>
         <span>hh</span>

        <p>hello</p>

        <MyInput type='text'/>

        <StyleCom color='purple'>custome com</StyleCom>


        <ChildStyle/>

        <Btn1>btn1</Btn1>
        <Btn2>btn2</Btn2>
    </StyledFooter>
  )
}


function Child(props){
    return (

        <div className={props.className}>child</div>
    )
}

