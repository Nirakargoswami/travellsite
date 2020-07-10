import React from 'react';
import "../src/header.scss";
import ICON from "/home/bhumika/Desktop/TEST/test-app/src/icono.png";
import DOWN from "/home/bhumika/Desktop/TEST/test-app/src/down.png";
import LOGO from "/home/bhumika/Desktop/TEST/test-app/src/photo.jpg";
import {
  Link 
} from "react-router-dom"
import LOGOIMAGE from "/home/bhumika/Desktop/TEST/test-app/src/download.png";
import {auth} from "./LOGPAGE/FIREBASE_CONFIGURATION"
const headr = (props) => {
console.log(props.user)


    return (
      <div className="HEADER">
        <div>
          {/* DOWN HEARI GAVE A HEADER FRIEST LINE WHICH I GAVE NAME OF HEDERBAR */}

          <div className="HEADERBAR">
            {/*  uNDER THIS IS LEFT SIDE OF CONTNET*/}
            <div className="HEADERCONTETN">
              <div className="IMAGEOFLOGO">
                <img
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  src={LOGOIMAGE}
                  alt=""
                />
              </div>
              <div className="HEADERMENUBOXOFLOGO">
                <div
                  style={{
                    width: "75%",

                    margin: "0px 0.8rem 0px 0rem",
                  }}
                >
                  Dashboard
                </div>
                <div style={{ width: "25%" }}>
                  <div style={{ width: "15px", height: "15px" }}>
                    <img style={{ width: "100%" }} src={DOWN} alt="" />
                  </div>
                </div>
              </div>
            </div>

            {/*RIGHT SIDE OF HEDERBAR CONTETN  */}
            <div className="HEADERCONTETN">
              <div style={{ marginRight: "1rem" }}>
                <div style={{ width: "15px", height: "15px" }}>
                  <img style={{ width: "100%" }} src={ICON} alt="" />
                </div>
              </div>

              <div style={{ fontSize: "15px" }}>
                <h8 style={{ color: "white" }}>BASECAMP STARTUP</h8>
              </div>
              <div className="HEADERLEFT">
                <div className="IMAGE">
                  <img
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "50px",
                    }}
                    src={LOGO}
                    alt=""
                  />
                </div>

                <div
                  style={{
                    width: "65%",

                    marginRight: "0.4rem",
                  }}
                >
                  <div style={{ marginLeft: "0.2rem", fontSize: "15px" }}>
                    <h8>dashbord</h8>
                  </div>
                </div>
              </div>
              <div>
                {(props.user === null )? (
                  <Link to="/LOGINPAGE">
                    <button className="BUTTON">LOGIN</button>
                  </Link>
                ) : (
                  <button className="BUTTON" onClick={() => auth.signOut()}>
                    LOG OUT
                  </button>
                )}
              </div>
            </div>
          </div>
          {/* DOWN hear this is HEADER SECOND ROW WHICH I GAVE NAME OF HEADER MENU */}
          <div className="HEADERMENU">
            <div className="HEADERMENUBOX">
              <div
                style={{
                  width: "75%",

                  margin: "0px 0.8rem 0px 0rem",
                }}
              >
                Dashboard
              </div>
              <div style={{ width: "25%" }}>
                <div style={{ width: "15px", height: "15px" }}>
                  <img style={{ width: "100%" }} src={DOWN} alt="" />
                </div>
              </div>
            </div>
            <div className="HEADERMENUBOX">
              <div
                style={{
                  width: "75%",

                  margin: "0px 0.8rem 0px 0rem",
                }}
              >
                Dashboard
              </div>
              <div style={{ width: "25%" }}>
                <div style={{ width: "15px", height: "15px" }}>
                  <img style={{ width: "100%" }} src={DOWN} alt="" />
                </div>
              </div>
            </div>
            <div className="HEADERMENUBOX">
              <div
                style={{
                  width: "75%",

                  margin: "0px 0.8rem 0px 0rem",
                }}
              >
                Dashboard
              </div>
              <div style={{ width: "25%" }}>
                <div style={{ width: "15px", height: "15px" }}>
                  <img style={{ width: "100%" }} src={DOWN} alt="" />
                </div>
              </div>
            </div>
            <div className="HEADERMENUBOX">
              <div
                style={{
                  width: "75%",

                  margin: "0px 0.8rem 0px 0rem",
                }}
              >
                Dashboard
              </div>
              <div style={{ width: "25%" }}>
                <div style={{ width: "15px", height: "15px" }}>
                  <img style={{ width: "100%" }} src={DOWN} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default headr;



