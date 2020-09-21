import React from "react";
import './styleAppLogin.css'
import { LoginPage, SignupPage } from './index'

class AppLogin extends React.Component {
state = {
      isLogginActive: true,
    };
  changeState = () => {
    const { isLogginActive } = this.state;
    if (isLogginActive) {
      this.Swipe.classList.remove("right");
      this.Swipe.classList.add("left");
    } else {
      this.Swipe.classList.remove("left");
      this.Swipe.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }
  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Signup" : "Login";
    return (
      <div className="App-login-page">
        <div className="login-page">
          <div className="container-loginpage" ref={ref => (this.container = ref)}>
            {isLogginActive && (<LoginPage containerRef={ref => (this.current = ref)} />)}
            {!isLogginActive && (<SignupPage containerRef={ref => (this.current = ref)} />)}
          </div>
          <Swipe
            current={current}
            containerRef={ref => (this.Swipe = ref)}
            onClick={this.changeState.bind(this)} />
        </div>
      </div>
      
    )
  }
}
const Swipe = props => {
  return (
  <div className="right-side right" 
    ref={props.containerRef}
    onClick={props.onClick}>
    <div className="swipe-container">
      <div className="text-swipe">{props.current}</div>
    </div>
  </div>
  )
}
export default AppLogin;
