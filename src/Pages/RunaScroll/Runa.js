import React, { Component } from "react";
import { SmoothScroll } from "./util/smoothScroll";
import runaOne from "./images/runa-1-cutout.svg";
import runaTwo from "./images/runa-2-cutout.svg";
import runaThree from "./images/runa-3-cutout.svg";
import runaFour from "./images/runa-4-cutout.svg";
import runaFive from "./images/runa-5-cutout.svg";
import runaSix from "./images/runa-6-cutout.svg";
import runaSeven from "./images/runa-7-cutout.svg";
import runaEight from "./images/runa-8-cutout.svg";
import runaNine from "./images/runa-9-cutout.svg";
import runaTen from "./images/runa-10-cutout.svg";
import runaEleven from "./images/runa-11-cutout.svg";
import runaTwelve from "./images/runa-12-cutout.svg";
import runaThirteen from "./images/runa-13-cutout.svg";
import runaFourteen from "./images/runa-14-cutout.svg";
import runaFifteen from "./images/runa-15-cutout.svg";
import runaSixteen from "./images/runa-16-cutout.svg";
import runaSeventeen from "./images/runa-17-cutout.svg";
import runaEighteen from "./images/runa-18-cutout.svg";
import runaNineteen from "./images/runa-19-cutout.svg";
import "./main.css";

class Runa extends Component {
  constructor(props) {
    super(props);

    this.state = {
      target: null,
      scrolled: null,
      scrollHeightLevel: 0,
      prevRotateIndex: 1,
      rotateIndex: 1,
      runaArr: [
        runaOne,
        runaTwo,
        runaThree,
        runaFour,
        runaFive,
        runaSix,
        runaSeven,
        runaEight,
        runaNine,
        runaTen,
        runaEleven,
        runaTwelve,
        runaThirteen,
        runaFourteen,
        runaFifteen,
        runaSixteen,
        runaSeventeen,
        runaEighteen,
        runaNineteen
      ]
    };
  }

  componentDidMount = () => {
    const { target, scrolled } = new SmoothScroll(document, 120, 12);
    this.setState({
      target,
      scrolled
    });
    document.addEventListener("scroll", this.onScroll);
  };

  componentWillUnmount = () => {
    document.removeEventListener("scroll", this.onScroll);
    this.state.target.removeEventListener("wheel", this.state.scrolled);
  };

  getScrollIncrement = runaArr => {
    const totalAmountOfPossibleScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    let scrollIncrement =
      totalAmountOfPossibleScroll / runaArr.length / runaArr.length;
    scrollIncrement = scrollIncrement * 6; // adjust the multiplier based on the clientHeight.
    return scrollIncrement;
  };

  getLowEndRange = (
    rotateIndex,
    scrollHeightLevel,
    fullRotation,
    scrollIncrement
  ) => {
    const lowEndRangeCalculation =
      rotateIndex * scrollIncrement - scrollIncrement;
    return scrollHeightLevel === 0
      ? lowEndRangeCalculation
      : lowEndRangeCalculation + scrollHeightLevel * fullRotation;
  };

  getHighEndRange = (
    rotateIndex,
    scrollHeightLevel,
    fullRotation,
    scrollIncrement
  ) => {
    const highEndRangeCalculation = rotateIndex * scrollIncrement;
    return scrollHeightLevel === 0
      ? highEndRangeCalculation
      : highEndRangeCalculation + scrollHeightLevel * fullRotation;
  };

  setDefaultScrollRotationIndex = scrollY => {
    this.setState((state, props) => ({
      prevScrollPosition: scrollY,
      prevRotateIndex: state.rotateIndex,
      rotateIndex: 0
    }));
  };

  setDecrementRotationCountAndScrollHeightLevel = () => {
    this.setState((state, props) => ({
      rotateIndex: 18,
      scrollHeightLevel: state.scrollHeightLevel - 1,
      rotationCount: state.rotationCount - 1
    }));
  };

  setDecrementRotateIndex = () => {
    this.setState((state, props) => ({
      rotateIndex: state.rotateIndex - 1 < 0 ? 0 : state.rotateIndex - 1
    }));
  };

  setIncrementRotationCountAndScrollHeightLevel = () => {
    this.setState((state, props) => ({
      rotateIndex: 0,
      scrollHeightLevel: state.scrollHeightLevel + 1,
      rotationCount: state.rotationCount + 1
    }));
  };

  setIncrementRotateIndex = () => {
    this.setState((state, props) => ({
      rotateIndex: state.rotateIndex + 1
    }));
  };

  switchOverIncrementOrDecrementsetStateOptions = (
    scrollY,
    lowEndRange,
    highEndRange,
    rotateIndex
  ) => {
    if (scrollY === 0) {
      this.setDefaultScrollRotationIndex(scrollY);
    }
    if (lowEndRange < scrollY && scrollY < highEndRange) {
      return;
    } else if (lowEndRange > scrollY) {
      if (rotateIndex - 1 === -1) {
        // rotateIndex set to 18
        this.setDecrementRotationCountAndScrollHeightLevel();
      } else {
        this.setDecrementRotateIndex();
      }
    } else if (scrollY > highEndRange) {
      if (rotateIndex + 1 === 19) {
        // rotateIndex set to 0
        this.setIncrementRotationCountAndScrollHeightLevel();
      } else {
        this.setIncrementRotateIndex();
      }
    }
  };

  onScroll = event => {
    const { scrollHeightLevel, rotateIndex, runaArr } = this.state;
    const scrollY = window.scrollY;
    const scrollIncrement = this.getScrollIncrement(runaArr);
    const fullRotation = scrollIncrement * runaArr.length;
    const lowEndRange = this.getLowEndRange(
      rotateIndex,
      scrollHeightLevel,
      fullRotation,
      scrollIncrement
    );
    const highEndRange = this.getHighEndRange(
      rotateIndex,
      scrollHeightLevel,
      fullRotation,
      scrollIncrement
    );
    this.switchOverIncrementOrDecrementsetStateOptions(
      scrollY,
      lowEndRange,
      highEndRange,
      rotateIndex
    );
  };

  renderRuna = () => {
    return this.state.runaArr[this.state.rotateIndex];
  };

  render() {
    return (
      <div className="runaContainer">
        <img src={this.renderRuna()} className="image" />
      </div>
    );
  }
}

export default Runa;
