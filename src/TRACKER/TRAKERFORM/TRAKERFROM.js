import React, { Component } from 'react';

class TRAKERFROM extends Component {
  constructor(props) {
    super(props);
    this.state = {
      EMAIL: "",
      PEOPLE: "",
      FULLNAME: "",
      AGE: "",
      DATE: "",
      TRAKENAME: "",
    };
  }

  change = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    console.log(this.state.TRAKENAME);
    return (
      <div>
        <input
          type="email"
          placeholder="Email"
          name="EMAIL"
          onChange={this.change}
        />
        <input
          type="text"
          placeholder="full name"
          name="FULLNAME"
          onChange={this.change}
        />
        <input
          type="text"
          placeholder="Npo of people"
          name="PEOPLE"
          onChange={this.change}
        />
        <input
          type="text"
          placeholder="Age"
          name="Age"
          onChange={this.change}
        />
        <input
          type="text"
          placeholder="TRAKENAME"
          name="TRAKENAME"
          onChange={this.change}
        />
      </div>
    );
  }
}

export default TRAKERFROM;
