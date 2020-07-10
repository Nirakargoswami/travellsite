import React from 'react';
import PAPERBOX from "./PAPERBOX"
import LOGO from "/home/bhumika/Desktop/TEST/test-app/src/photo.jpg";
import "./content.scss";
import "./PAPERBOX.scss"
const contetn = () => {
    return (
      <div style={{ padding: "1.2rem", overflow: "hidden" }}>
        <div className="MAINCONTETN">
          {/* DOWN HEAR LOWERSIDE OF CONETNT */}
          <div className="UPERSIDE_OF_CONTETN">
            <div className="LEFTSIDE">
              <PAPERBOX  />
              <PAPERBOX />
            </div>
            <div className="CENTER">
              <PAPERBOX large />
            </div>
            <div className="RIGHTSIDE">
              <PAPERBOX />
              <PAPERBOX />
            </div>
          </div>

          {/* LOWESIDEOF CONETNT */}
          <div>
            <div className="LOWER_SIDE_OF_CONTENT">
              <div style={{ width: "20%", padding: " 0rem 1rem 0rem 0rem" }}>
                <PAPERBOX />
              </div>
              <div style={{ width: "20%", padding: " 0rem 1rem 0rem 0rem" }}>
                <PAPERBOX Singlepaper />
              </div>

              <div style={{ width: "60%", height: "50px", marginTop: "0rem" }}>
                <div className="MAINPAPER">
                  <div className="UPERCONTENT">Work orderrs</div>
                  <div>
                    <div
                      className="
                     INSIDE_OF_LARGE_CONTENT"
                    >
                      <div className="INSIDECONTENT_LEFT_SIDE">
                        <div className="INSIDE_OF_IAMGEBOX">
                          <div className="IMAGEBOX">
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
                        </div>
                        <div className="INSIDE_OF_LEFTSIDE_CONTETN">
                          <h9
                            style={{
                              color: "black",
                              fontSize: "14px",
                              border: "1px solid black",
                            }}
                          >
                            John EILLS
                          </h9>

                          <h9 style={{ color: "gray", fontSize: "9px" }}>
                            Mr JOHN ELISs mils
                          </h9>
                        </div>
                      </div>
                      <div className="INSIDECONTENT_RIGHT_SIDE">
                        {" "}
                        <h9 style={{ color: "gray", fontSize: "9px" }}>
                          Mr JOHN ELISs mils
                        </h9>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* do uperside change */}
          </div>
        </div>
      </div>
    );
}

export default contetn;

  /* <PAPERBOX />

      <PAPERBOX Singlepaper />
      <PAPERBOX large /> */
