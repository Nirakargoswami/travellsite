import React, { Component } from "react";
import { auth } from "./FIREBASE_CONFIGURATION";



import {userprofile} from "./FIREBASE_CONFIGURATION";

class SINGHUP_PAGE extends Component {
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

 

  Singhup = async (event) => {
event.preventDefault();

    try {
      const {user} = await auth.createUserWithEmailAndPassword(
        this.state.Email,
        this.state.Password
       
      );
     const name = this.state.Disaplayname;
      await userprofile(user,{name});
      ;
    } catch (error) {
      console.log(error);
    }
    this.setState({
      Email: "",
      Password: "",
    });
  };

  render() {
    console.log(this.state.Email)
    return (
      <div>
        <h5>singh up</h5>
        <input
          value={this.state.Email}
          onChange={this.change}
          type="text"
          name="Email"
        />
        <input
          value={this.state.Password}
          type="password"
          name="Password"
          onChange={this.change}
        />
        <input
          value={this.state.Disaplayname}
          type="text"
          name="Disaplayname"
          onChange={this.change}
        />
        <button onClick={this.Singhup}> Singh up</button> <br />
        <button   onClick={() => auth.signOut()  }>sign out</button>
      </div>
    );
  }
}


export default SINGHUP_PAGE;