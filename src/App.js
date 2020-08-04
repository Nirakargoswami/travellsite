import React, { Component } from "react";
import { connect } from "react-redux";
import LOG_IN from "./Redux/reux.action";
import { Switch, Route } from "react-router-dom";
import DESHBORD from "./DESHBORD/DESHBORD";
 import LANDINGPAGE from "./USER/USERLANDIGPAGE/USERLANDINGPAGE";
 
 import Loginpage from "./LOGPAGE/Materialui_sign";
 import SINGHUP_PAGE from "./LOGPAGE/SINGHUP";
 import { auth } from "./LOGPAGE/FIREBASE_CONFIGURATION";

 import Userform from "./USER/USERFORM/userform";
 import TRAKERFROM from "./TRACKER/TRAKERFORM/TRAKERFROM";
 import timer from "./AUTHENTICATION/LOGINPAGE/timer";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "null",
    };
  }

  // componentDidMount() {
  //   auth.onAuthStateChanged((user) => {
  //     this.props.user(user);
  //     this.setState({
  //       user: user,
  //     });
  //   });
  // }

  render() {
    // console.log(this.state.user);
    // console.log(this.props);
    return (
      <div>
        <Switch>
          <Route path="/Userform" component={Userform} />

          <Route path="/TRAKERFROM" component={TRAKERFROM} />
          <Route
            exact
            path="/"
            render={(props) => <LANDINGPAGE {...props} />}
          />
          <Route path="/SINGHUP_PAGE" component={SINGHUP_PAGE} />
          <Route render={(props) => <Loginpage {...props} />} />
          {/* <Automation />

          {/* <DESHBORD/> */}
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    user: (user) => dispatch(LOG_IN(user)),
  };
};

export default connect(null, mapDispatchToProps)(App);
