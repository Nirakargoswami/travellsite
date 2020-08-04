import React, { Component } from 'react';
import {firestore}  from "../../LOGPAGE/FIREBASE_CONFIGURATION";
import { connect } from "react-redux";
class Userform extends Component {


    constructor(props) {
        super(props);
        this.state={
              EMAIL :"",
              PEOPLE:"",
              FULLNAME:"",
              AGE:"",
              DATE:"",
              TRAKENAME:""

        }
    }


    
 userprofile = async () => {

 


  const userinfo =  firestore.doc(`/tracker/qADQhjMIvRLejHO7LEch`);
console.log(userinfo)

 

  const snapeshote = await userinfo.get();
   console.log(snapeshote.exists)

  if (snapeshote.exists) {
    const { displayName, email } = this.props.user

  
    const creatdAt = new Date();
    try {
      await userinfo.set({
        displayName,
        email,
        creatdAt,
  
      });
    } catch (error) {
      alert("created aerro " + error.message);
    }
  }
   

  return userinfo;
  
};

change = (event )=> {

    const name = event.target.name
    const value= event.target.value
this.setState({
    [name] : value
})



}




    render() {
     
         
        console.log(this.userprofile()
         
        );
                return (
          <div>
            
            <input type="email" placeholder="Email" name="EMAIL" 
            
              onChange={this.change}
            />
            <input type="text" placeholder="full name" name="FULLNAME"   onChange={this.change}/>
            <input
              type="text"
              placeholder="Npo of people"
              name="PEOPLE"  onChange={this.change}
            />
            <input type="text" placeholder="Age" name="Age" onChange={this.change} />
            <input type="text" placeholder="TRAKENAME" name="TRAKENAME"  onChange={this.change}/>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    user: state.LOGIN_REDUCER.user,
  };
};

export default connect(mapStateToProps, null)(Userform);

