import React, { Component } from "react";
import Runa from "./Runa";
import RunaBackground from "./runaBackground";
import "../../index.css";
import "./main.css";

class RunaHome extends Component {
  render() {
    return (
      <div className="topContainer">
        <RunaBackground />
        <RunaBackground />
        <RunaBackground />
        <RunaBackground />
        <RunaBackground />
        <RunaBackground />
        <Runa />
      </div>
    );
  }
}

export default RunaHome;
