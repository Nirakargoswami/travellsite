import React from "react";
import image from "/home/bhumika/Desktop/TEST/test-app/src/photo1.jpeg";
import "./Main.scss";

import Landsacpe1 from "/home/bhumika/Desktop/TEST/test-app/src/compress.jpg";

import {Link} from "react-router-dom";

const Main = () => {
  return (
    <div className="MAINBOXOF_CONTENT">
      {" "}
      {/* season header start */}
      <div className="SEASON_HEADER">
        <div className="SEASON_HEADER-SEASON">THIS SEASON TRIP</div>
        <div className="SEASON_HEADER-SEASON_MONTH">
          <div>a</div>
          <div>september-october</div>
          <div>c</div>
        </div>
      </div>
      {/* psost start */}
      <div className="POST">
        <div className="POST-POST_CONTETNT">
          <div>
            <div className="POST-POST_CONTETNT-HEADER">HIMALAY</div>
          </div>
          <div className="POST-POST_CONTETNT-IMAGE">
            <img src={Landsacpe1} alt="" />
          </div>
          <div className="POST-POST_CONTETNT-DESCRIPTION">
            <div className="POST-POST_CONTETNT-DESCRIPTION-FRIESTLING">
              gaumaukh pass
            </div>
            <div className="POST-POST_CONTETNT-DESCRIPTION-CENTER">
              the colaebreting app sp gerat sthat u canm feel like ur wotkring
              from fromt of you we provide wide range of the feature atha u can
              intigrate to ecahe other in fron of ypu
            </div>
            <div className="POST-POST_CONTETNT-DESCRIPTION-LASTROW">
              <button className="BUTTON">Book now</button>
            </div>
          </div>
          <div className="POST-POST_CONTETNT-SLIDER_BUTTON">
            <button>arrow</button>
            <button>arrow</button>
          </div>
        </div>

        {/* we will use but after contorll o side scroll */}

        {/* <div className="POST-POST_CONTETNT"></div>
        <div className="POST-POST_CONTETNT"></div> */}
      </div>
      {/* paost bsed on month fidih up here */}
      <div className="PLACE">
        <div className="PLACE-PLCAE_SIDE_CONTENT">
          <div className="PLACE-PLCAE_SIDE_CONTENT-MYBUTTON">Karnataka</div>
        </div>
        <div className="PLACE-PLCAE_CENTER_CONTENT">
          <div className="PLACE-PLCAE_CENTER_CONTENT-CENTER_BUTTEN">
            Karnataka
          </div>
        </div>

        <div className="PLACE-PLCAE_SIDE_CONTENT">
          <div className="PLACE-PLCAE_SIDE_CONTENT-MYBUTTON">Karnataka</div>
        </div>
      </div>
      <div className="BOX">
        <div className="CHILD">a</div>
      </div>
      <div className="main">
        {/* Mian page  do not tuch upper  */}

        {/* Box which is all over the page */}

        <div className="contentBox">
          <div className="Description">
            <div className="MainImageBox">
              <div className="Image">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="writendescription">
              <h3>MUNAF FAZLANI</h3>
              <p>Utrakhand exploreer </p>
            </div>
          </div>
          <div className="ImageBox">
            <img src={Landsacpe1} alt="" />
          </div>
          <div className="WritenBox">
            <h2>uttrakhand flower vally track</h2>
            <p>
              the colaebreting app sp gerat sthat u canm feel like ur wotkring
              from fromt of you we provide wide range of the feature atha u can
              intigrate to ecahe other in fron of ypu
            </p>

            <div className="WritenBox-Button">
              <button className="BUTTON">
                <Link to="Userform"> Book your trak now</Link>
              </button>

              <button className="BUTTON">Book now</button>
              {/* <div  className="Box"></div> */}
            </div>
          </div>
        </div>
        {/* same type of second box down here */}
        {/* Box which is all upper the page */}

        <div className="contentBox">
          <div className="Description">
            <div className="MainImageBox">
              <div className="Image">
                <img src={image} alt="" />
              </div>
            </div>
            <div className="writendescription">
              <h3>MUNAF FAZLANI</h3>
              <p>Utrakhand exploreer </p>
            </div>
          </div>
          <div className="ImageBox">
            <img src={Landsacpe1} alt="" />
          </div>
          <div className="WritenBox">
            <h2>uttrakhand flower vally track</h2>
            <p>
              the colaebreting app sp gerat sthat u canm feel like ur wotkring
              from fromt of you we provide wide range of the feature atha u can
              intigrate to ecahe other in fron of ypu
            </p>

            <div className="WritenBox-Button">
              <button className="BUTTON">
                <Link to="Userform"> Book your trak now</Link>
              </button>

              <button className="BUTTON">Book now</button>
              {/* <div  className="Box"></div> */}
            </div>
          </div>
        </div>
        {/* 
      Do not touch down side  */}
      </div>
    </div>
  );
};

export default Main;
