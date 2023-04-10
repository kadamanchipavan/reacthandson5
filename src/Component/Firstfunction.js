import React, { PureComponent } from 'react'
import './newStyles.css'


export default class HigherOrderComponent extends PureComponent {
    constructor(){
        super();
        this.state={
           counter:0
        }

    }
  render() {
    return (
      <>
      
      <h4>Pure Component :  {this.state.counter}</h4>
      <button className='button' onClick={()=>{this.setState({counter:this.state.counter + 1})}}> Click Me to Increase</button>      
       
        <br />
      <button className='button' onClick={()=>{this.setState({counter:this.state.counter - 1})}}>  Click Me to Decrease </button>
      </>
    )
  }
}
