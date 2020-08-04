import React, { Component } from 'react';
import DESHBORD_MAIN from "./DESBORD_COMPONENT/MAIN/DESHBORD_MAIN/deshbord";
import Currenttrip from "./DESBORD_COMPONENT/MAIN/CURRENTRIP_MAIN/Currenttrip";
import MENU from "./DESBORD_COMPONENT/MENU/MENU"
import {Switch, Route}  from "react-router-dom";

class DESHBORD extends Component {
    render() {
        return (
          <div>
            <MENU />
            <Switch>
              <Route exact path="/" component={DESHBORD_MAIN} />
              <Route path="/Currenttrip" component={Currenttrip} />
            </Switch>

            {/* <DESHBORD_MAIN/>
            <CURRETNTRIP_MAIN /> */}
          </div>
        );
    }
}

export default DESHBORD;
