import React, { Component, Fragment } from "react";
import styled, { keyframes } from "styled-components";

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
`;

const ListTextUl = styled.ul`
  list-style-type: none;
  font-family: "Cardo", serif;
  font-size: 1.2rem;
  color: #fcfcfc;

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
  strawberry: "16.2rem",
  blueberry: "14rem",
  mango: "9.9rem",
  pineapple: "14.2rem"
};

const renderImageText = (imgHeaderText, imgListText) => {
  const fruitKey = imgHeaderText.toLowerCase();
  return (
    <Fragment>
      <div>
        <HeaderText
          fontColor={fruitHeaderColor[fruitKey]}
          headerBgWidth={fruitHeaderWidth[fruitKey]}
        >
          {imgHeaderText}
        </HeaderText>
      </div>
      <ListTextUl>{renderListText(imgListText)}</ListTextUl>
    </Fragment>
  );
};

const renderListText = listTextArr => {
  return listTextArr.map(text => <li>{text}</li>);
};

class ImageSection extends Component {
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
          ${imgArr[3]} 1920px,
        `}
          sizes="100vw"
          alt={imgAltText}
        />
        {imgHeaderText === "Blueberry" || imgHeaderText === "Pineapple" ? (
          <TextContainerRight>
            {renderImageText(imgHeaderText, imgListText)}
          </TextContainerRight>
        ) : (
          <TextContainerLeft>
            {renderImageText(imgHeaderText, imgListText)}
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
