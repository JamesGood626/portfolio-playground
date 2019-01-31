import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";
import { TweenMax } from "gsap";

// TODO:
// Make this component a class component so that I can use
// GSAP to have more control over the test animation for the
// component that is animating in.
const slideOutFramesForward = keyframes`
  0% {
    transform: translateY(0%)
  }
  100% {
    transform: translateY(-50%)
  }
`;

const slideInFramesForward = keyframes`
  0% {
    transform: translateY(100%)
  }
  100% {
    transform: translateY(0%)
  }
`;

const slideOutFramesBackward = keyframes`
  0% {
    transform: translateY(0%)
  }
  100% {
    transform: translateY(50%)
  }
`;

const slideInFramesBackward = keyframes`
  0% {
    transform: translateY(-100%)
  }
  100% {
    transform: translateY(0%)
  }
`;

const Container = styled.div`
  position: absolute;
  top: ${props => props.positionTop};
  // For the active slide
  z-index: ${props => (props.animateSlideIn ? 10 : null)};
  // For the inactive slides
  z-index: ${props => (props.positionTop === null ? -10 : null)};
  // For the exiting slide
  z-index: ${props => (props.animateSlideOut ? 5 : null)};
  height: auto;
  width: 100vw;

  // FORWARD ANIMATIONS
  // Slide Out Animation
  animation-name: ${props =>
    props.animateSlideOut &&
    props.direction === "FORWARD" &&
    slideOutFramesForward};
  // Slide In Animation
  animation-name: ${props =>
    props.animateSlideIn &&
    props.direction === "FORWARD" &&
    slideInFramesForward};

  // BACKWARD ANIMATIONS
  // Slide Out Animation
  animation-name: ${props =>
    props.animateSlideOut &&
    props.direction === "BACKWARD" &&
    slideOutFramesBackward};
  // Slide In Animation
  animation-name: ${props =>
    props.animateSlideIn &&
    props.direction === "BACKWARD" &&
    slideInFramesBackward};

  animation-duration: 0.8s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-iteration-count: 1;
  animation-direction: normal;
  animation-fill-mode: forwards;
  animation-play-state: running;
`;

// object-fit: cover; was the trick for maintaining
// a consistent size for the image across all screen sizes.
// Removing that and setting height: auto; will make the height
// responsive.
const Image = styled.img`
  height: 100vh;
  width: 100vw;
  object-fit: cover;
`;

// pass in some props to control the position
// either left or right.
const TextContainer = styled.div`
  position: absolute;
  top: 24%;
  width: 18rem;
`;

const TextContainerLeft = TextContainer.extend`
  right: 8%;
`;

const TextContainerRight = TextContainer.extend`
  left: 12%;
`;

const HeaderText = styled.h1`
  margin-bottom: 0.4rem;
  width: ${props => props.headerBgWidth};
  font-family: "Nunito Sans", sans-serif;
  font-size: 3.2rem;
  color: ${props => props.fontColor};
  background: #fcfcfc;

  // clip-path: inset(100px 50px);
`;

const TextEl = styled.text`
  fill: ${props => props.fontColor};
  font-family: "Nunito Sans", sans-serif;
  font-size: 2.8rem;
`;

const ListTextUl = styled.ul`
  list-style-type: none;
  font-family: "Cardo", serif;
  font-size: 1.2rem;
  color: #fcfcfc;
  margin-top: 1rem;

  li {
    margin-bottom: 0.8rem;
  }
`;

const fruitHeaderColor = {
  strawberry: "red",
  blueberry: "blue",
  mango: "orange",
  pineapple: "yellow"
};

const fruitHeaderWidth = {
  strawberry: "230",
  blueberry: "200",
  mango: "140",
  pineapple: "200"
};

const svgRectStyles = {
  fill: "#fcfcfc",
  transform: "translateY(14px)"
};

// Removed this to explore SVG text to achieve Clip-path animation for Header Text
{
  /* <HeaderText
  fontColor={fruitHeaderColor[fruitKey]}
  headerBgWidth={fruitHeaderWidth[fruitKey]}
>
  {imgHeaderText}
</HeaderText> */
}

// The mask setup
{
  /* <mask id="theMask">
  <rect id="theSquare" x="-100" y="0" width="100" height="100" fill="#fff" />
</mask>
<g mask="url(#theMask)">
  <TextEl x="0" y="55" fontColor={fruitHeaderColor[fruitKey]}>
    {imgHeaderText}
  </TextEl>
</g> */
}

const renderImageText = (imgHeaderText, imgListText, slideId) => {
  const fruitKey = imgHeaderText.toLowerCase();
  return (
    <Fragment>
      <div>
        <svg viewBox="0 0 240 80" xmlns="http://www.w3.org/2000/svg">
          <mask id="theMask">
            <rect
              id={`the-${fruitKey}-square`}
              x="-250"
              y="0"
              width={fruitHeaderWidth[fruitKey]}
              height="100"
              fill="#fff"
            />
          </mask>
          <g mask="url(#theMask)">
            <rect
              height="50"
              width={fruitHeaderWidth[fruitKey]}
              fill="#fcfcfc"
              y="15"
            />
            <TextEl x="0" y="55" fontColor={fruitHeaderColor[fruitKey]}>
              {imgHeaderText}
            </TextEl>
          </g>
        </svg>
      </div>
      <ListTextUl className={`${fruitKey}-${slideId}`}>
        {renderListText(imgListText, slideId)}
      </ListTextUl>
    </Fragment>
  );
};

const renderListText = (listTextArr, slideId) => {
  return listTextArr.map((text, i) => (
    <li key={`list-text-${slideId}-${i}`}>{text}</li>
  ));
};

class ImageSection extends Component {
  // ALRIGHT, SO DUE TO MY SLOW COMPUTER I LAST LEFT OFF HERE
  // Tweaking the Tween for the-${fruitKey}-square svg mask
  // The first one that mounts animates as it should.
  // Now I just need to set the mask to hide any subsequent headers that
  // should be revealed on scrolling to a new slide. Tweaking the x value should
  // suffice. But srsly, my computer be sleepn.
  componentDidMount = () => {
    const { imgHeaderText, slideId, currentSlideId } = this.props;
    const fruitKey = imgHeaderText.toLowerCase();
    if (slideId === currentSlideId) {
      console.log("Animating fruitKey: ", fruitKey);
      TweenMax.to(`#the-${fruitKey}-square`, 1, {
        attr: { x: 0 },
        delay: 0.5
      });
    } else {
      TweenMax.set(`#the-${fruitKey}-square`, { x: -250 });
    }
  };

  componentDidUpdate = () => {
    const { imgHeaderText, slideId } = this.props;
    const fruitKey = imgHeaderText.toLowerCase();
    const el = document.querySelector(`.${fruitKey}-${slideId}`);
    // SWEET ITS ANIMATING.
    // Utilize the props to determine the currentSlide which should have the coordinated animation
    // for the banner and fruit description text.
    // TweenMax.to(el, 1, { x: "400px" });

    // TweenMax.to(`#the-${fruitKey}-square`, 1, {
    //   attr: { x: 0 },
    //   delay: 0.5
    // });
    TweenMax.staggerFromTo(el.childNodes, 0.4, { alpha: 0 }, { alpha: 1 }, 0.2);
  };

  render() {
    const {
      imgId,
      imgArr,
      imgHeaderText,
      imgListText,
      imgAltText,
      slideId,
      prevSlideId,
      currentSlideId,
      direction
    } = this.props;
    return (
      // Position top will be derived by the pageController's state.
      // if the slideId is 0 then strawberry will be present, 1 blueberry, etc.
      <Container
        positionTop={slideId === currentSlideId ? "0%" : null}
        animateSlideOut={slideId === prevSlideId ? true : false}
        animateSlideIn={
          slideId === currentSlideId && prevSlideId !== null ? true : false
        }
        direction={direction}
      >
        <Image
          id={`${imgId}`}
          src={`${imgArr[0]}`}
          srcSet={`
          ${imgArr[1]} 900px,
          ${imgArr[2]} 1400px,
          ${imgArr[3]} 1920px
          `}
          sizes="100vw"
          alt={imgAltText}
        />
        {imgHeaderText === "Blueberry" || imgHeaderText === "Pineapple" ? (
          <TextContainerRight>
            {renderImageText(imgHeaderText, imgListText, slideId)}
          </TextContainerRight>
        ) : (
          <TextContainerLeft>
            {renderImageText(imgHeaderText, imgListText, slideId)}
          </TextContainerLeft>
        )}
      </Container>
    );
  }
}

export default ImageSection;

// export default ({
//   imgId,
//   imgArr,
//   imgHeaderText,
//   imgListText,
//   imgAltText,
//   slideId,
//   prevSlideId,
//   currentSlideId,
//   direction
// }) => {
//   console.log("THE DIRECTION: ", direction);
//   return (
//     // Position top will be derived by the pageController's state.
//     // if the slideId is 0 then strawberry will be present, 1 blueberry, etc.
//     <Container
//       positionTop={slideId === currentSlideId ? "0%" : null}
//       animateSlideOut={slideId === prevSlideId ? true : false}
//       animateSlideIn={
//         slideId === currentSlideId && prevSlideId !== null ? true : false
//       }
//       direction={direction}
//     >
//       <Image
//         id={`${imgId}`}
//         src={`${imgArr[0]}`}
//         srcSet={`
//           ${imgArr[1]} 900px,
//           ${imgArr[2]} 1400px,
//           ${imgArr[3]} 1920px,
//         `}
//         sizes="100vw"
//         alt={imgAltText}
//       />
//       {imgHeaderText === "Blueberry" || imgHeaderText === "Pineapple" ? (
//         <TextContainerRight>
//           {renderImageText(imgHeaderText, imgListText)}
//         </TextContainerRight>
//       ) : (
//         <TextContainerLeft>
//           {renderImageText(imgHeaderText, imgListText)}
//         </TextContainerLeft>
//       )}
//     </Container>
//   );
// };
