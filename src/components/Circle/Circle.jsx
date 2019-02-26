import React, { Component } from "react";
import { Rect } from "react-konva";
import { Filters } from "konva";

class Circle extends Component {
    constructor() {
        super();
        this.startRotate = this.startRotate.bind(this);
    }

    state = {
        r: 0
    };

    startRotate() {
        this.setState({
            r: this.state.r + 15
        });
        requestAnimationFrame(this.startRotate);
    }

    componentDidMount() {
        this.startRotate();
    }

    componentWillUnmount() {}

    render() {
        return (
            <Rect
                rotation={this.state.r}
                fill={"#f00"}
                width={200}
                height={200}
                x={320}
                y={250}
                shadowBlur={5}
                offset={{ x: 100, y: 100 }}
                filters={[Filters.Blur]}
            />
        );
    }
}
export default Circle;
