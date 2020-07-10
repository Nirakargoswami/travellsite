import React from 'react';
import LOGO from "/home/bhumika/Desktop/TEST/test-app/src/photo.jpg";
import "./PAPERBOX.scss";


const PAPFERBOX = (props) => {
    return (
      <div>
        <div className="MAINPAPERBOX">
          <div className="UPERCONTENT">Work orderrs</div>

          {props.large ? (
            <div className="LARGE_PAPER_LOWECONTETNT" id="style-1">
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
                    Mr JOHN ELISs mils id somthig get
                  </h9>
                </div>
              </div>
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
                    Mr JOHN ELISs mils id somthig get
                  </h9>
                </div>
              </div>
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
                    Mr JOHN ELISs mils id somthig get
                  </h9>
                </div>
              </div>
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
                    Mr JOHN ELISs mils id somthig get
                  </h9>
                </div>
              </div>
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
                    Mr JOHN ELISs mils id somthig get
                  </h9>
                </div>
              </div>

              {/* change uper side enything  */}
            </div>
          ) : props.Singlepaper ? (
            <div className="LOWERCONTENT">
              <div className="INSIDELOWECONTETN">
                <div className="NOFONT">0</div>
                <div className="FONT">Created</div>
              </div>
            </div>
          ) : (
            <div className="LOWERCONTENT">
              <div className="INSIDELOWECONTETN">
                <div className="NOFONT"> 4</div>
                <div className="FONT">Created</div>
              </div>
              <div className="INSIDELOWECONTETN">
                <div className="NOFONT">0</div>
                <div className="FONT">Achieved</div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
}

export default PAPFERBOX;
