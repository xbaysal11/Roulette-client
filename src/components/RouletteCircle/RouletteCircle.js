import React, { Component } from "react";
import { Stage, Layer, Rect, Text, Circle } from "react-konva";
import { coordsUtils } from "../../util";
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
      r: this.state.r + 5
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
        <Stage width={600} height={540}>
          <Layer>
            {coordsUtils.getCoords(this.props.users.length).map(([x, y], idx) => (
              <Circle
                key={idx}
                x={x * 150 + 270}
                y={y * 150 + 270}
                radius={50}
                fill="blue"
              />
            ))}
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
