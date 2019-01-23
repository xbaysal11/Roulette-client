import React, { Component } from "react";
import { Stage, Layer, Rect, Text } from "react-konva";
// import { Util } from "konva";
import "./RouletteCircle.scss";

class RouletteCircle extends Component {
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
      <div className="roulette">
        <Stage width={600} height={550}>
          <Layer>
            <Text text="Try click on rect" />
            <Rect
              rotation={this.state.r}
              fill={"#f00"}
              width={200}
              height={200}
              x={320}
              y={250}
              shadowBlur={5}
              offset={{ x: 100, y: 100 }}
            />
          </Layer>
        </Stage>
        <div>
          <button className="spin">Spin!</button>
        </div>
      </div>
    );
  }
}
export default RouletteCircle;
