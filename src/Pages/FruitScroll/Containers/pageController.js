import React, { Component } from "react";
import throttle from "lodash.throttle";
import ImageSection from "../Components/image-section";
import ImgConfig from "../Config";

// TODO:
// Add direction to state to pass as props.
export default class pageController extends Component {
  state = {
    slideId: 1,
    prevSlideId: null,
    direction: "FORWARD",
    transitionSlide: false
  };

  componentDidMount = () => {
    document.body.style.overflow = "hidden";
    // Throttle the mousewheel event with a time that allows animations to complete.
    window.addEventListener("mousewheel", throttle(this.changeSlide, 1800));
  };

  componentWillUnmount = () => {
    document.body.style.overflow = "auto";
  };

  changeSlide = e => {
    console.log("MOUSEWHEEL EVENT: ", e.deltaY);
    // Check the deltaY from the event
    // negative -> scroll up (decrement this.state.slideId)
    // positive -> scroll down (increment this.state.slideId)
    const { deltaY } = e;
    // This trickery is necessary because two events always fire
    // So this is how I prevent the slideId from being incremented twice in one scroll.
    // Need to look at how throttle is implemented.
    if (deltaY > 0) {
      // set the state of the direction to be forward if the state isn't forward
      this.setStateDirectionForward();
    } else {
      // set to backward if not backward
      this.setStateDirectionBackward();
    }
    if (!this.state.transitionSlide) {
      this.toggleTransitionSlide();
      this.updateSlideId(deltaY);
    } else {
      this.toggleTransitionSlide();
    }
  };

  setStateDirectionForward = () => {
    if (this.state.direction != "FORWARD") {
      this.setState({
        direction: "FORWARD"
      });
    }
  };

  setStateDirectionBackward = () => {
    if (this.state.direction != "BACKWARD") {
      this.setState({
        direction: "FORWARD"
      });
    }
  };

  toggleTransitionSlide = () => {
    this.setState((state, props) => ({
      transitionSlide: !state.transitionSlide
    }));
  };

  updateSlideId = deltaY => {
    if (deltaY < 0) {
      this.decrementSlideId(deltaY);
    } else {
      this.incrementSlideId(deltaY);
    }
  };

  decrementSlideId = deltaY => {
    if (this.state.slideId !== 0) {
      this.setState((state, props) => ({
        prevSlideId: state.slideId,
        slideId: --state.slideId
      }));
    }
  };

  incrementSlideId = deltaY => {
    if (this.state.slideId < 3) {
      this.setState((state, props) => ({
        prevSlideId: state.slideId,
        slideId: ++state.slideId
      }));
    }
  };

  render() {
    return (
      <main>
        <ImageSection
          imgId="strawberry-img"
          imgArr={ImgConfig.strawberry.fruitImages}
          imgHeaderText={ImgConfig.strawberry.headerText}
          imgListText={ImgConfig.strawberry.listText}
          imgAltText={ImgConfig.altText}
          slideId={0}
          prevSlideId={this.state.prevSlideId}
          currentSlideId={this.state.slideId}
          direction={this.state.direction}
        />
        <ImageSection
          imgId="blueberry-img"
          imgArr={ImgConfig.blueberry.fruitImages}
          imgHeaderText={ImgConfig.blueberry.headerText}
          imgListText={ImgConfig.blueberry.listText}
          imgAltText={ImgConfig.altText}
          slideId={1}
          prevSlideId={this.state.prevSlideId}
          currentSlideId={this.state.slideId}
          direction={this.state.direction}
        />
        <ImageSection
          imgId="mango-img"
          imgArr={ImgConfig.mango.fruitImages}
          imgHeaderText={ImgConfig.mango.headerText}
          imgListText={ImgConfig.mango.listText}
          imgAltText={ImgConfig.altText}
          slideId={2}
          prevSlideId={this.state.prevSlideId}
          currentSlideId={this.state.slideId}
          direction={this.state.direction}
        />
        <ImageSection
          imgId="pineapple-img"
          imgArr={ImgConfig.pineapple.fruitImages}
          imgHeaderText={ImgConfig.pineapple.headerText}
          imgListText={ImgConfig.pineapple.listText}
          imgAltText={ImgConfig.altText}
          slideId={3}
          prevSlideId={this.state.prevSlideId}
          currentSlideId={this.state.slideId}
          direction={this.state.direction}
        />
      </main>
    );
  }
}
