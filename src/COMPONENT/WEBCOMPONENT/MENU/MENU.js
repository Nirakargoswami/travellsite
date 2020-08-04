




import React, { Component } from "react";


import "/home/bhumika/Desktop/TEST/test-app/src/COMPONENT/WEBCOMPONENT/MENU/Menu.scss";
import {Link} from "react-router-dom";
import {auth} from    "../../../LOGPAGE/FIREBASE_CONFIGURATION" ;
import {connect} from "react-redux"






class MENU extends Component {
  render() {
    return (
      <div>
        <div>
          <div
            style={{
              margin:"0px",
             padding:"0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            {this.props.user !== null && (
              <h5 className="Button">
                <Link
                  style={{ textDecoration: "none", color: "white" }}
                  to="/Userform"
                >
                  my Account
                </Link>
              </h5>
            )}

            <h5 className="Button">
              <a>traks</a>
            </h5>

            <h5 className="Button">
              <a>Explorer</a>
            </h5>
            <h5 className="Button">
              <a>Bloge</a>
            </h5>
            <button className="MYBUTTON">
              <Link className="MYBUTTON-Link"
                style={{ textDecoration: "none", color: "white" }}
                to="TRAKERFROM"
              >
                LOGIN AS TRCKER
              </Link>
            </button>

            {this.props.user === null ? (
              <button 
           
              style={{padding:'8px 25px 8px 25px',}}
              className="MYBUTTON">
                <Link
                  className="BUTTON-Link"
                  style={{ textDecoration: "none", color: "white" }}
                  to="/LOGINPAGE"
                >
                  LOG IN{" "}
                </Link>
              </button>
            ) : (
              <button onClick={() => auth.signOut()} className="Box">
                LOGOUT
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}





const mapStateToProps = (state) => {
  return {
    user: state.LOGIN_REDUCER.user,
  };
};

export default connect(mapStateToProps,null)(MENU);