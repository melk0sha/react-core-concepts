import React, { PureComponent } from "react";

class ReactPureComponent extends PureComponent {
  render() {
    const { text } = this.props;
    return <p>{text}</p>;
  }
}

export default ReactPureComponent;
