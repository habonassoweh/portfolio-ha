import React from "react"
import "./App.scss";


import {Login} from './components/Login'
import { Signup } from "./components/Signup";

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      isLogginActive: true,
    }
  }
   changeState(){
     const { isLogginActive } = this.state;
    //  is(isLogginActive)

   }

  render(){
    const { isLogginActive } = this.state; 
    const current = isLogginActive ? 'Signup': 'Login';
    const currentActive = isLogginActive ? 'login': 'signup';
    return(
      <div className="App">
        <div className="login">
          <div className="container">
             {isLogginActive && <Login containerRef ={ref => this.current = ref }/>}
             {!isLogginActive && <Signup containerRef ={ref => this.current = ref} />}
          </div>
          <RightSide current={current} containerRef ={ref => this.rightSide = ref} onClick={this.changeStat.bin(this)}/>
        </div>
      </div>
    )
  }
}


const RightSide = props => {
  return <div className="right-side" ref={props.containerRef} onClick={props.onClick}>
    <div className="inner-container">
      <div className="text">{props.current}</div>
    </div>

  </div>
}
export default App;
