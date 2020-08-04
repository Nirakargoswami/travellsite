import React from "react";
import "/home/bhumika/Desktop/TEST/test-app/src/auto.css";


class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      Newcount : 0
    };
  }

  
 
  click = () => {
    this.setState({
      Newcount: this.state.Newcount + 1,
    });
  };

shouldComponentUpdate(Props){
//   console.log(this.props.data);
//   console.log(Props.data);

// if(Props.data === this.props.data){
//   return true
// }else{
//   return false;
// }

return true;
}


  render() {
    console.log(this.props);
    console.log("reander happnded");
    return (
      <div>
        <h1>this chidld componet</h1>
        <h1>{this.state.count}</h1>
        <h1>{this.state.Newcount}</h1>
        <div  className="animation" >

        </div>
       
        <button onClick={this.click}>Counter</button>
      </div>
    );
  }
}


export default Child;