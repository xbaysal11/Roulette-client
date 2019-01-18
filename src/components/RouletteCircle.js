import React, { Component } from "react";
import "./RouletteCircle.sass";

class RouletteCircle extends Component {
  render() {
    return (
      <div className="roulette">
        <h1>Circle</h1>
        <h1>Choosed User: </h1>
        <div>
          <button className="spin">Spin!</button>
        </div>
      </div>
    );
  }
}
export default RouletteCircle;
