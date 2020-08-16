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
      password:"",
      phoneNumber:""
    };

    this.signUpApiCallOnClick=this.signUpApiCallOnClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }


  signUpApiCallOnClick(){
      signup({
        "name":this.state.name,
        "username":this.state.username,
        "mail":this.state.email,
        "password":this.state.password,
        "phoneNumber":this.state.phoneNumber

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
              <input type="text" name="name" placeholder="name" id="name" value={this.state.name} 
                       onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input type="text" name="username" placeholder="username" id="username" value={this.state.username} 
                       onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="text" name="email" placeholder="email" id="email" value={this.state.email} 
                       onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number:</label>
              <input type="text" name="email" placeholder="phoneNumber" id="phoneNumber" value={this.state.phoneNumber} 
                       onChange={this.handleChange}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input type="text" name="password" placeholder="password" id="password" value={this.state.password} 
                       onChange={this.handleChange} />
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