

import React, { Component } from 'react'
import {auth}  from   "./FIREBASE_CONFIGURATION"
// import SINGUP from "./SINGHUP"
import "LOGINPAGE/loginpage.scss";
// import PropTypes from 'prop-types'
import {signinWithGoogle }  from "./FIREBASE_CONFIGURATION"
import {userprofile }  from "./FIREBASE_CONFIGURATION"
import IMAGE from "/home/bhumika/Desktop/TEST/test-app/src/Mask Group.png";
import {connect} from "react-redux";
import {Redirect}  from "react-router-dom"
class LOGIN_PAGE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      Disaplayname: "",
    };
  }
  change = (event) => {
    const { value, name } = event.target;

    this.setState({
      [name]: value,
    });
  };

  LOGIN = async (event) => {
    await event.preventDefault();
    try {
      const user = await auth.signInWithEmailAndPassword(
        this.state.Email,
        this.state.Password
      );

    await userprofile(user);
      

      this.setState({
        Email: "",
      Password:""

      })
    
     
    } catch (error) {
      console.log(error);
    }
  };

  
  

  render() {
    
    console.log(this.props)
    
    return (
      <div>
        {this.props.user === null ? (
          <div>
            {/* DOWN HEAR WE DEFINE A MAIN OF THE LOG IN PAGE  */}

            <div className="MAIN">
              {/* DOWN HEAR WE DEFIEN TWO PAER OF THE BOX */}
              <div className="Leftside">
                <div className="Leftside-Leftside_of_contetn">
                  <h1>Login to your acount</h1>
                  <label for="r1">Email address</label>
                  <input
                    value={this.state.Email}
                    onChange={this.change}
                    type="text"
                    name="Email"
                    placeholder="Email address "
                  />

                  <label for="r1">Password</label>

                  <input
                    value={this.state.Password}
                    name="Password"
                    type="password"
                    placeholder="password"
                    onChange={this.change}
                  />
                  <button
                    onClick={this.LOGIN}
                    className="Leftside-Leftside_of_contetn-BUT_A"
                  >
                    Log in
                  </button>
                  <button
                    type="button"
                    className="Leftside-Leftside_of_contetn-BUT_B"
                    onClick={signinWithGoogle}
                  >
                    Singh with goodle
                  </button>
                  <div style={{ textAlign: "center" }}>
                    {" "}
                    <a href="#">new account</a>
                  </div>
                </div>
              </div>

              <div className="rightside">
                <img
                  style={{ width: "100%", height: "100%", objectFit: "fill" }}
                  src={IMAGE}
                  alt=""
                />
              </div>

              {/* down heaer main box div so do noot tiuch */}
            </div>
          </div>
        ) : (
          <Redirect to="Userform" />
        )}

        {/* /////////// */}

        {/* <SINGUP /> */}
      </div>
    );
  }
}

const mapStateToprops = (state) => {
  return {
user: state.LOGIN_REDUCER.user

  }
}

export default connect(mapStateToprops,null)(LOGIN_PAGE);