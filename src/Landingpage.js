import React from 'react';
import HEADER  from "./headr";
import COMPONENT from "./contetn";


const Landingup = ({user}) => {


    console.log(user)
    return (


        <div>
            <HEADER    user={user}/>
            <COMPONENT/>
        </div>
    );
}

export default Landingup;
