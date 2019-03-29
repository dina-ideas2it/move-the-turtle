import React, { Component } from "react";
import Turtle from "./TurtleImage";
import "./Cell.scss";

export default class Cell extends Component {
  constructor(props) {
    super(props);
    this.renderTurtle = this.renderTurtle.bind(this);
  }

  renderTurtle() {
    const turtleXAxis = this.props.turtlePos.xAxis;
    const turtleYAxis = this.props.turtlePos.yAxis;
    const { xAxis, yAxis } = this.props;
    if (xAxis === turtleXAxis && yAxis === turtleYAxis) {
      return <Turtle />;
    }
  }

  render() {
    const cellClass = this.props.inPath ? `cell inPath` : `cell`;
    return (
      <div className={cellClass}>
        <div className="cellContainer">{this.renderTurtle()}</div>
      </div>
    );
  }
}
