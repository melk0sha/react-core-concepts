import React, { Component } from "react";

class ReactComponent extends Component {
  render() {
    const { text } = this.props;
    return <p>{text}</p>;
  }
}

export default ReactComponent;
