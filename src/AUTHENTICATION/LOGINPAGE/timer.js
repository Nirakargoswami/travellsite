


import React, { Component } from 'react';

class timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: null,
    };
  }
  starttandstop = () => {
    setTimeout(() => {
      this.setate({
        count: this.state.count + 1,
      });
    }, 1000);
  };

  render() {
    return (
      <div>
        <button onClick={this.starttandstop}>start stop</button>
        <h1>Timer</h1>
    <h1>{this.state.count}</h1>


      </div>
    );
  }
}

export default timer;

