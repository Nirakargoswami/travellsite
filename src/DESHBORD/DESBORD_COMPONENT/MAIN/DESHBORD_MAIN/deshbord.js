import React from 'react';
import "./MIAN.scss";
import {Link } from "react-router-dom";

const MAIN = () => {
    return (
      <div className="MAIN_CONTENT">
        <div className="SIDEBAR">
          <button className="BUTTON">
            {" "}
            <Link to="/">deshbord</Link>
          </button>

          <button className="BUTTON">
            {" "}
            <Link to="/Currenttrip">currnet trip</Link>
          </button>

          <button className="BUTTON">new trip</button>
          <button className="BUTTON">blog</button>
          <button className="BUTTON" style={{ marginBottom: "10px" }}>
            setting
          </button>
        </div>

        {/* down herer contentn bar whre our all componetn are going to shwo  */}

        <div className="CONTENT_BAR">
          <div className="MAINCONTENT">
            <div className="usepr_side-contetn">
              <div className="UPER_LEFT_SIDE">
                <div className="LEFT_SIDE_TABLE">
                  <div className="LEFT_SIDE_TABLE-TABLE_HEADER">
                    <dvi>
                      <h3>
                        Current on going trip
                        <button>icon for forward </button>
                      </h3>
                    </dvi>
                    <div>
                      <h3>DATA :</h3>
                    </div>
                  </div>
                  <div className="TABLE">
                    <div>
                      <table>
                        <th>name</th>
                        <th>Payment</th>
                        <th>Status</th>
                        {/* <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button className="BUTT">add </button>
                              <button className="BUTT">Remove</button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>  
                          </td>
                        </tr>
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr>{" "}
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr> */}
                        <tr>
                          <td>Mr vikas</td>
                          <td>pending</td>
                          <td>
                            <div>
                              <button>add </button>
                              <button>Remove</button>
                            </div>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="UPER_RIGHT_SIDE">
                <div className="UPER_RIGHT_SIDE-UPER_DIV">
                  <div>
                    <h5>Total anrolled</h5>
                  </div>
                  <div>
                    <h1>25</h1>
                  </div>
                </div>

                <div className="UPER_RIGHT_SIDE-UPER_DIV">
                  <div>
                    <h5>Total anrolled</h5>
                  </div>
                  <div>
                    <h1>25</h1>
                  </div>
                </div>
              </div>
            </div>
            <div className="Lower_side_content"></div>
          </div>
        </div>

        {/* do not touch down here */}
      </div>
    );
}

export default MAIN;
