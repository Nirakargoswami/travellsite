
import React from "react";
import Box from "@material-ui/core/Box";
import MENU from  "../WEBCOMPONENT/MENU/MENU"
import "/home/bhumika/Desktop/TEST/test-app/src/COMPONENT/HEADER/Header.scss"
import Image from "/home/bhumika/Desktop/TEST/test-app/src/svetlana-gumerova-GuRgaMvOclM-unsplash.jpg";







const HEADER = () => {
    return (
      <div>
        <div style={{display:"flex",flexDirection:"column",margin:"0px",padding:"0px"}} >
          <div className="hader">
            <div style={{ width: "50%" ,marginLeft:"2rem"}}>TRAVELLER</div>
            <div style={{ width: "50%" }}>
              <MENU />
            </div>
          </div>

          <div className="Main">
            <div className="mian_Contetnt">
              <h1>instance collabaration with trackers </h1>
              <p> take a track and find peace in nature</p>
            </div>
          </div>
        </div>
      </div>
    );
}

export default HEADER;






