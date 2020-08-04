import React,{useState} from "react";
import Child from "./Aut_child";
import Newchild from "./Newcild "
class Pomodoro extends React.Component {
  
constructor(props) {
    super(props);
    this.state = {
      things: [
        {
          id: "a",
          headline: "React",
          
        },
        {
          id: "b",
          headline: "Redux",
          
        },
        {
          id: "c",
          headline: "GraphQL",
          
        },
      ],
    };
     this.rootRef = React.createRef();

     this.singleRefs = this.state.things.reduce((acc, value) => {
       acc[value.id] = React.createRef();
       return acc;
     }, {});
  }
 



  // stope = () => {
  //   clearInterval(this.start);
  // };
  // hader = () => {
  //   this.start = setInterval(() => {
  //     this.setState({
  //       count: this.state.count + 1,
  //     });
  //   }, 1000);
  // };

  render() {
    console.log(this.singleRefs);
     console.log(this.singleRefs["c"]);
    return (
      <div>
        <input type="text" />
        <a href="#1">box 1</a>
        <a href="#2">box 2</a>
        <button onClick={this.click}>Count</button>
        <h1>{this.state.count}</h1>
        <div
          id="1"
          style={{ width: "500px", height: "500px", backgroundColor: "blue" }}
        >
          iujugjl
        </div>
        <div
          id="2"
          style={{ width: "500px", height: "500px", backgroundColor: "green" }}
        >
          dfgsdgsg
        </div>
        {/* <Child data={this.state.count} /> */}
        <Newchild />
      </div>
    );
  }
}

export default Pomodoro;
