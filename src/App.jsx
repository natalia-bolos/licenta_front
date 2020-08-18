import React from "react";
import { BrowserRouter, Route} from 'react-router-dom';
import UserAuthentication from "./user/UserAuthentication";
import Navbar from './layout/Navbar';
import Landing  from './pages/Landing';
import { Dashboard } from './pages/Dashboard';
import "./App.css";

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div
          style={{
          background: "linear-gradient(to top, #e0dede, #dedede)",
          top:'0', bottom:'0', left:'0', right:'0', position: 'absolute'}}>
          <Navbar />
          <Landing />
          <Route path="/start" component={UserAuthentication}/>
          <Route path="/dashboard" component={Dashboard}/>
          {/* <Link to="start">Start</Link> */}
        </div> 
      </BrowserRouter>
      
      
      );
  }   
}

export default App;
