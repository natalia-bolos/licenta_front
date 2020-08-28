import React from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import UserAuthentication from "./user/UserAuthentication";
import Navbar from './layout/Navbar';
import Landing  from './pages/Landing';
import Profile from './user/Profile'
import Dashboard  from './pages/Dashboard';
import MoreInfo from "./user/MoreInfo";
import "./App.css";
import "./index.css";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn:false
    }
  }

  toggleLoggedIn(){
    this.setState({loggedIn:!this.state.loggedIn})
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar loggedIn={this.state.loggedIn} toggleLoggedIn={this.toggleLoggedIn.bind(this)}/>
          <Route path="/start" render={(props)=><UserAuthentication {...props} toggleLoggedIn={this.toggleLoggedIn.bind(this)}/>}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/profile/:userId" component={Profile}/>
          <Route path="/moreinfo" component={MoreInfo}/>
          <Route exact path="/" component={Landing}/>
        </div> 
      </BrowserRouter>
      
      
      );
  }   
}

export default App;
