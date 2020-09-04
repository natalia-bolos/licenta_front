import React from "react";
import loginImg from "../register.svg";
import { signup, login } from '../util/ApiUtils';
import { ACCESS_TOKEN, USER_ID, USER_NAME, NAME } from '../constants';

export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      phoneNumber: "",
      errorMessage: ""
    };

    this.signUpApiCallOnClick = this.signUpApiCallOnClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  signUpApiCallOnClick() {
    signup({
      "name": this.state.name,
      "username": this.state.username,
      "mail": this.state.email,
      "password": this.state.password,
      "phoneNumber": this.state.phoneNumber

    }).then(response => {
      if (response.success) {

        login({ "usernameOrEmail": this.state.username, "password": this.state.password }).then(response => {
          localStorage.setItem(ACCESS_TOKEN, response.accessToken);
          localStorage.setItem(USER_ID, response.userId);
          localStorage.setItem(USER_NAME, this.state.username);
          localStorage.setItem(NAME, response.name);
          this.props.toggleLoggedIn();
          this.props.registerSuccessRedirection();
        })
      }
    }).catch(error => {
      if (error.success === false) {
        this.setState({ errorMessage: error.message })
      }
    });
  }


  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" placeholder="name" id="name" value={this.state.name}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" placeholder="username" id="username" value={this.state.username}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" placeholder="email" id="email" value={this.state.email}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="password" name="password" placeholder="password" id="password" value={this.state.password}
                onChange={this.handleChange} />
            </div>
            <p style={{ color: 'red' }}>{this.state.errorMessage}</p>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn marginbtn" onClick={this.signUpApiCallOnClick}>
            Register
          </button>
        </div>
      </div>
    );
  }
}