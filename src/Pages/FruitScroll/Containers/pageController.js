import React, { Component } from "react";
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
  };

  componentWillUnmount = () => {
    document.body.style.overflow = "auto";
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
