import React, { Component } from "react";

class Greeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: null,
      username: "Andrea",
    };
  }

  componentDidMount() {
    this.getHour();
  }

  getHour = () => {
    const date = new Date();
    const hour = date.getHours();
    this.setState({ hour });
  };

  render() {
    const { hour, username } = this.state;

    return (
      <p>
        {hour < 12 ? "Godmorgon" : "Godkväll"}, {username}
      </p>
    );
  }
}

export default Greeting;
