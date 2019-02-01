import React, { Component } from "react";
import { Stage, Layer, Wedge, Circle, Rect, Group } from "react-konva";
import { coordsUtils } from "../../util";
import fillPath from "../../img/client-1.jpg";
// import { Util } from "konva";
import "./RouletteCircle.scss";

class RouletteCircle extends Component {
  constructor() {
    super();
    this.startRotate = this.startRotate.bind(this);
  }

  state = {
    image: null,
    rotation: 100,
    angularSpeed: 90
  };

  startRotate() {
    this.setState({
      r: this.state.r + 5
    });
    requestAnimationFrame(this.startRotate);
  }

  componentDidMount() {
    this.startRotate();

    const image = new window.Image();
    image.onload = () => {
      this.setState({
        image
      });
    };
    image.src = fillPath;
  }

  componentWillUnmount() {}

  rotate() {
    this.setState({
      rotation: this.state.rotation + 100
    });
    this.rotate();
  }

  render() {
    return (
      <div className="roulette">
        <Stage width={600} height={535}>
          <Layer>
            <Group>
              <Circle
                x={310}
                y={240}
                radius={190}
                rotation={100}
                width={500}
                height={500}
                fill="black"
                // rotation={this.state.r}
                // fillPatternImage={this.state.image}
                opacity={0.2}
                // offset={{ x: 400, y: 100 }}
              />
              {coordsUtils
                .getCoords(this.props.users.length)
                .map(([x, y], idx) => (
                  <Circle
                    key={idx}
                    x={x * 150 + 420}
                    y={y * 150 + 300}
                    radius={30}
                    shadowBlur={20}
                    // rotation={this.state.r}
                    stroke="black"
                    strokeWidth={2}
                    fillPatternImage={this.state.image}
                    offset={{ x: 100, y: 100 }}
                  />
                ))}
              {/* </Circle> */}
            </Group>
            <Wedge
              x={310}
              y={410}
              radius={50}
              angle={50}
              fill="green"
              stroke="black"
              strokeWidth={2}
              rotation={63}
            />
          </Layer>
        </Stage>
        <div>
          <button className="spin" onClick={this.rotate}>
            Spin!
          </button>
        </div>
      </div>
    );
  }
}
export default RouletteCircle;
