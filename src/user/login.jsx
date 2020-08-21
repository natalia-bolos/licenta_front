import React from "react";
import loginImg from "../login.svg";
import { ACCESS_TOKEN, USER_ID, USER_NAME,NAME } from '../constants';
import { login } from '../util/ApiUtils';


export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      loggedIn: false
    };
    this.loginApiCallOnClick = this.loginApiCallOnClick.bind(this);
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  loginApiCallOnClick() {
    login({ "usernameOrEmail": this.state.username, "password": this.state.password }).then(response => {
      localStorage.setItem(ACCESS_TOKEN, response.accessToken);
      localStorage.setItem(USER_ID, response.userId);
      localStorage.setItem(USER_NAME, this.state.username);
      localStorage.setItem(NAME, response.name);
      console.log("logged in ok!");
      this.props.logInSuccessRedirection();
      this.props.toggleLoggedIn();
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
              <input type="text" name="username" placeholder="username" id="username" value={this.state.username}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" placeholder="password" id="password" value={this.state.password}
                onChange={this.handleChange} />
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