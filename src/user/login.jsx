import React from "react";
import loginImg from "../login.svg";
import { ACCESS_TOKEN, USER_ID } from '../constants';
import { login } from '../util/ApiUtils';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      username:"",
      password:""
    };
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange=this.handlePasswordInputChange.bind(this);
    this.loginApiCallOnClick=this.loginApiCallOnClick.bind(this);
  }

  handleUsernameInputChange(event) {
    this.setState({username: event.target.value})
    
  }
  handlePasswordInputChange(event) {
    this.setState({password: event.target.value})
  }

  loginApiCallOnClick(){
    login({"usernameOrEmail":this.state.username,"password":this.state.password}).then(response => {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      localStorage.setItem(USER_ID,response.userId);
      console.log("logged in ok!");
      console.log(localStorage.getItem(ACCESS_TOKEN));
      console.log(localStorage.getItem(USER_ID));
  })
}
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" placeholder="username"  value={this.state.username} 
                       onChange={this.handleUsernameInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" placeholder="password" value={this.state.password} 
                       onChange={this.handlePasswordInputChange}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.loginApiCallOnClick}>
            Login
          </button>
        </div>
      </div>
    );
  }
}