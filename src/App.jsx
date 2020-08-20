import React from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import UserAuthentication from "./user/UserAuthentication";
import Navbar from './layout/Navbar';
import Landing  from './pages/Landing';
import Profile from './user/Profile'
import Dashboard  from './pages/Dashboard';
import MoreInfo from "./user/MoreInfo";
import "./App.css";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      landing:true
    };
  }

  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/start" component={UserAuthentication}/>
          <Route path="/dashboard" component={Dashboard}/>
          <Route path="/profile" component={Profile}/>
          <Route path="/moreinfo" component={MoreInfo}/>
          <Route exact path="/" component={Landing}/>
        </div> 
      </BrowserRouter>
      
      
      );
  }   
}

export default App;
