import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import PAPERBOX  from "./PAPERBOX"
import LANDINGPAGE from "./Landingpage"
import LOGINPAGE from "./LOGPAGE/LOGINPAGE"
import LOGO from "/home/bhumika/Desktop/TEST/test-app/src/photo.jpg";
import {auth} from "./LOGPAGE/FIREBASE_CONFIGURATION"
import userprofile from "./LOGPAGE/FIREBASE_CONFIGURATION"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

      user:"null"
    };
  }

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
    this.setState({
      user : user
    })
    });
   
  }

  render() {
        console.log(this.state.user)
    return (
      <div>
     

         <Switch>
          <Route exact path="/" render={(props)=>   <LANDINGPAGE   {...props}  user={this.state.user} />  }/>


      <Route   render={(props)=>  <LOGINPAGE       
      
      user={this.state.user}
      {...props}
      
      />  } />
        </Switch> 
      </div>
    );
  }
}
  

export default App;
