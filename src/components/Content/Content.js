import React, { Component } from "react";
import "./Content.scss";

class Content extends Component {
  render() {
    return <div className="content">{this.props.children}</div>;
  }
}
export default Content;
