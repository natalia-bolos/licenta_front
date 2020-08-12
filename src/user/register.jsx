import React from "react";
import loginImg from "../register.svg";
import { signup } from '../util/ApiUtils';
export class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      name:"",
      username:"",
      email:"",
      password:""
    };
    this.handleUsernameInputChange = this.handleUsernameInputChange.bind(this);
    this.handlePasswordInputChange=this.handlePasswordInputChange.bind(this);
    this.handleNameInputChange=this.handleNameInputChange.bind(this);
    this.handleEmailInputChange=this.handleEmailInputChange.bind(this);
    this.signUpApiCallOnClick=this.signUpApiCallOnClick.bind(this);
  }
  handleUsernameInputChange(event) {
    this.setState({username: event.target.value})
    
  }
  handlePasswordInputChange(event) {
    this.setState({password: event.target.value})
  }
  handleNameInputChange(event){
    this.setState({name: event.target.value})
  }
  handleEmailInputChange(event){
    this.setState({email: event.target.value})
  }

  signUpApiCallOnClick(){
      signup({
        "name":this.state.name,
        "username":this.state.username,
        "mail":this.state.email,
        "password":this.state.password,
      }).then(response => {
        // localStorage.setItem(ACCESS_TOKEN, response.accessToken);
        console.log("registered ok!");
        // console.log(localStorage.getItem(ACCESS_TOKEN));
    })
  }

  
  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register:</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" placeholder="name" value={this.state.name} 
                       onChange={this.handleNameInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" placeholder="username" value={this.state.username} 
                       onChange={this.handleUsernameInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" placeholder="email" value={this.state.email} 
                       onChange={this.handleEmailInputChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="text" name="password" placeholder="password" value={this.state.password} 
                       onChange={this.handlePasswordInputChange} />
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.signUpApiCallOnClick}>
            Register
          </button>
        </div>
      </div>
    );
  }
}