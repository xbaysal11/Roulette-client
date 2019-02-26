import React, { Component } from "react";
import PT from "prop-types";
import "./Content.scss";

class Content extends Component {
    static propTypes = {
        children: PT.any
    };
    render() {
        return <div className="content">{this.props.children}</div>;
    }
}
export default Content;
