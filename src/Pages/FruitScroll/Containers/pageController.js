import React, { Component } from "react";
import throttle from "lodash.throttle";
import ImageSection from "../Components/image-section";
import ImgConfig from "../Config";

// TODO:
// Add the scroll logic for vertical scroll animations.
export default class pageController extends Component {
  state = {
    slideId: 0
  };

  componentDidMount = () => {
    document.body.style.overflow = "hidden";
    // Check the deltaY from the event
    // negative -> scroll up
    // positive -> scroll down
    // Throttle the mousewheel event with a time that allows animations to complete.
    window.addEventListener("mousewheel", throttle(this.changeSlide, 3000));
  };

  componentWillUnmount = () => {
    document.body.style.overflow = "auto";
  };

  changeSlide = e => {
    console.log("MOUSEWHEEL EVENT: ", e.deltaY);
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
          currentSlideId={this.state.slideId}
        />
        <ImageSection
          imgId="blueberry-img"
          imgArr={ImgConfig.blueberry.fruitImages}
          imgHeaderText={ImgConfig.blueberry.headerText}
          imgListText={ImgConfig.blueberry.listText}
          imgAltText={ImgConfig.altText}
          slideId={1}
          currentSlideId={this.state.slideId}
        />
        <ImageSection
          imgId="mango-img"
          imgArr={ImgConfig.mango.fruitImages}
          imgHeaderText={ImgConfig.mango.headerText}
          imgListText={ImgConfig.mango.listText}
          imgAltText={ImgConfig.altText}
          slideId={2}
          currentSlideId={this.state.slideId}
        />
        <ImageSection
          imgId="pineapple-img"
          imgArr={ImgConfig.pineapple.fruitImages}
          imgHeaderText={ImgConfig.pineapple.headerText}
          imgListText={ImgConfig.pineapple.listText}
          imgAltText={ImgConfig.altText}
          slideId={3}
          currentSlideId={this.state.slideId}
        />
      </main>
    );
  }
}
