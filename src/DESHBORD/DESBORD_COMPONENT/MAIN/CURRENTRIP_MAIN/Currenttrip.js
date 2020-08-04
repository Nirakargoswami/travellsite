

import React, { Component } from 'react';
import "/home/bhumika/Desktop/TEST/test-app/src/DESHBORD/DESBORD_COMPONENT/MAIN/CURRENTRIP_MAIN/currnettrip.scss";
import person from "/home/bhumika/Desktop/TEST/test-app/src/photo-1450297350677-623de575f31c.jpeg";
import { Link} from "react-router-dom";
class Currenttrip extends Component {
    render() {
        return (
          <div className="MAIN_CONTENT">
            <div className="SIDEBAR">
              <button className="BUTTON">
                {" "}
                <Link  style={{textDecoration:"none", color:"black",  outline:"none"}} to="/">deshbord</Link>
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
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="MYBUTTON">click</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>Mr vikas</td>
                              <td>pending</td>
                              <td>
                                <div>
                                  <button className="BUTT">+</button>
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
                      <div className="UPER_RIGHT_SIDE-UPER_DIV-TEXT">
                        Profile
                      </div>
                      <div className="UPER_RIGHT_SIDE-UPER_DIV-IMAGE">
                        <div className="UPER_RIGHT_SIDE-UPER_DIV-IMAGE-ALTER">
                          <img src={person} alt="" />
                        </div>
                      </div>
                      <div className="UPER_RIGHT_SIDE-UPER_DIV-Description">
                        <h5>NAME : vikas</h5>

                        <h5>age:23 </h5>
                        <h5>No of people : 30</h5>
                        <h5>status : individual</h5>
                        <h5>payment : paied</h5>
                        <h5>helth : ok </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="Lower_side_content">loweside</div>
              </div>
            </div>

            {/* do not touch down here */}
          </div>
        );
    }
}

export default Currenttrip;
