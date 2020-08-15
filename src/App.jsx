import React from "react";
import { Link, BrowserRouter, Route} from 'react-router-dom';
import UserAuthentication from "./user/UserAuthentication";
import Navbar from './layout/navbar'

class App extends React.Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route path="/start" component={UserAuthentication}/>
          <Link to="start">Start</Link>
        </div> 
      </BrowserRouter>
      
      );
  }   
}

export default App;
