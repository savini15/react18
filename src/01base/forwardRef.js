import React, { Component,forwardRef} from 'react'

export default class App extends Component {

    mytext = React.createRef()
  render() {
    return (
      <div>

        <button  onClick={()=>{
            this.mytext.current.focus()
        }}>FOCUS</button>
        <Child ref={this.mytext}></Child>
      </div>
    )
  }
}



let Child = forwardRef((props,ref)=>
     (

        <div>

            <input ref={ref}/>
        </div>
    )

)
