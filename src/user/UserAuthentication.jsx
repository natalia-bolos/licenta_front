import React from "react";
import "../user/UserAuthentication.scss";
import { Login, Register } from "./Index";

class UserAuthentication extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }

  componentDidMount() {
    //Add .right by default
    this.rightSide.classList.add("right");
  }

  redirectToDashboardOnSuccess(){
    console.log(this.props);
    this.props.history.push('/dashboard');
  }

  redirectToMoreInfoOnSuccess(){
    console.log(this.props);
    this.props.history.push('/moreinfo');
  }

  changeState() {
    const { isLogginActive } = this.state;

    if (isLogginActive) {
      this.rightSide.classList.remove("right");
      this.rightSide.classList.add("left");
    } else {
      this.rightSide.classList.remove("left");
      this.rightSide.classList.add("right");
    }
    this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
  }

  render() {
    const { isLogginActive } = this.state;
    const current = isLogginActive ? "Register" : "Login";
    const currentActive = isLogginActive ? "login" : "register";
    return (
      <div className="UserAuthentication">
        <div className="login">
          <div className="container_user" ref={ref => (this.container = ref)}>
            {isLogginActive && (
              <Login toggleLoggedIn={this.props.toggleLoggedIn} logInSuccessRedirection={this.redirectToDashboardOnSuccess.bind(this)} containerRef={ref => (this.current = ref)} />
            )}
            {!isLogginActive && (
              <Register toggleLoggedIn={this.props.toggleLoggedIn} registerSuccessRedirection={this.redirectToMoreInfoOnSuccess.bind(this)} containerRef={ref => (this.current = ref)} />
            )}
          </div>
          <RightSide
            current={current}
            currentActive={currentActive}
            containerRef={ref => (this.rightSide = ref)}
            onClick={this.changeState.bind(this)}
          />
        </div>
      </div>
    );
  }
}

const RightSide = props => {
  return (
    <div
      className="right-side"
      ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default UserAuthentication;
