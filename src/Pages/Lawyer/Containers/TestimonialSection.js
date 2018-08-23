import React, { Component, Fragment } from "react";
// import Media from "react-media";
import styled from "styled-components";
import Carousel from "nuka-carousel";
// import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FlexJCCenterAIStartSection,
  FlexJCAICenterDiv,
  FlexColJCAICenterDiv,
  FlexColAICenterDiv
} from "../../../LayoutStyledComponents";

// The responsiveness is gone... Did I miss some styles?

const TestimonialContainerSection = FlexJCCenterAIStartSection.extend`
  width: 100%;
  height: 33rem;
  min-height: 33rem;
  padding: 0;
  padding-bottom: 2rem;
  color: #fcfcfc;
  background: ${props => props.theme.primaryColor};
`;

const TestimonialInnerContainerDiv = FlexColJCAICenterDiv.extend`
  padding: 0;
  width: 90%;
  max-width: 60rem;
  min-height: 30rem;
  padding-top: 3rem;
  padding-bottom: 4rem;
  margin-bottom: 10vh;
  // background: orange;
  & > h2 {
    font-family: ${props => props.theme.mainFont};
    font-size: ${props => props.theme.headerLevelTwoFontSize};
    // margin-top: 10vh;
  }

  @media (min-width: 500px) {
    & > h2 {
      font-size: ${props => props.theme.headerLevelTwoFontSize500W};
    }
  }
`;

const TestimonialCardContainerDiv = styled.div`
  width: 100%;
  height: 20rem;
  min-height: 20rem;
  margin-top: -2rem;
  // background: red;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 4.4rem;
  // background: blue;
  // negative margin-bottom brings dots closer to card.
  margin-bottom: -3rem;
`;

const TestimonialCard = FlexColJCAICenterDiv.extend`
  height: 50vh;
  min-height: 300px;
  max-height: 420px;
  width: 220px;
  // margin: 0 0.4rem;
  box-shadow: 0px 4px 30px -4px #555;
  background: #fcfcfc;

  @media (min-width: 400px) {
    width: 280px;
  }
`;

const TestimonialCardContentContainerDiv = FlexColAICenterDiv.extend`
  width: 16rem;
  height: 85%;
  padding: 0;
  background: lime;
`;

const TestimonialIconContainerDiv = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
  border: 2px solid #222;
`;

const TestimonialCardHeader = styled.h3`
  position: relative;
  font-size: ${props => props.theme.cardHeaderFontSize};

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 1%;
    left: -0.9rem;
    height: 1.5rem;
    border-left: 4px solid #222;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 1%;
    right: -0.9rem;
    height: 1.5rem;
    border-right: 4px solid #222;
  }

  @media (min-width: 500px) {
    font-size: ${props => props.theme.cardHeaderFontSize500W};
  }
`;

const SlideButton = styled.button`
  width: 2.4rem;
  height: 2.4rem;
  background: none;
  border: none;

  &:focus {
    outline: none;
  }

  & > svg {
    &:hover {
      fill: blue;
    }
  }
`;

const renderThreeCards = () => {
  return (
    <Fragment>
      <TestimonialCard className="testimonial-card hide-card--one" />
      <TestimonialCard>
        <TestimonialCardContentContainerDiv>
          <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
          <TestimonialCardHeader>Jenn Burke</TestimonialCardHeader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim, felis porttitor viverra imperdiet, turpis sem sodales
            ligula, ut mattis massa sem et diam.
          </p>
        </TestimonialCardContentContainerDiv>
      </TestimonialCard>
      <TestimonialCard className="testimonial-card hide-card--two" />
    </Fragment>
  );
};

const renderCardCarousel = active => {
  return (
    <Fragment>
      <span>"LA"</span>
      <TestimonialCard>
        <TestimonialCardContentContainerDiv>
          <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
          <TestimonialCardHeader>Jenn Burke</TestimonialCardHeader>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim, felis porttitor viverra imperdiet, turpis sem sodales
            ligula, ut mattis massa sem et diam.
          </p>
        </TestimonialCardContentContainerDiv>
      </TestimonialCard>
      <span>"RA"</span>
    </Fragment>
  );
};

export default class TestimonialSection extends Component {
  state = {
    active: null
  };

  render() {
    const divStyle = {
      width: "60vw",
      height: "80vh",
      paddingRight: "0"
    };
    // const divStyleTwo = { width: "21rem" };
    return (
      <TestimonialContainerSection>
        <TestimonialInnerContainerDiv>
          <h2>What Our Clients Are Saying</h2>
          <TestimonialCardContainerDiv>
            <Carousel
              initialSlideHeight="-200px"
              renderCenterLeftControls={({ previousSlide }) => (
                <SlideButton onClick={previousSlide}>
                  <svg
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 43"
                  >
                    <path d="M.92 21.99L32.5.93v41.16L.92 21.99z" />
                    <path
                      d="M38 5.87v39.31L7.83 26 38 5.87M39 4L6 26l33 21V4z"
                      transform="translate(-6 -4)"
                    />
                  </svg>
                </SlideButton>
              )}
              renderCenterRightControls={({ nextSlide }) => (
                <SlideButton>
                  <svg
                    onClick={nextSlide}
                    id="Layer_1"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 33 43"
                  >
                    <path d="M.5.91l31.58 20.1L.5 42.07V.91z" />
                    <path
                      d="M12 5.82L42.17 25 12 45.13V5.82M11 4v43l33-22L11 4z"
                      transform="translate(-11 -4)"
                    />
                  </svg>
                </SlideButton>
              )}
            >
              <CardContainer className="cardContainer">
                <TestimonialCardContentContainerDiv>
                  <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
                  <TestimonialCardHeader>Jenn Burke</TestimonialCardHeader>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur dignissim, felis porttitor viverra imperdiet,
                    turpis sem sodales ligula, ut mattis massa sem et diam.
                  </p>
                </TestimonialCardContentContainerDiv>
              </CardContainer>
              <CardContainer className="cardContainer">
                <TestimonialCardContentContainerDiv>
                  <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
                  <TestimonialCardHeader>Hank Murphey</TestimonialCardHeader>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur dignissim, felis porttitor viverra imperdiet,
                    turpis sem sodales ligula, ut mattis massa sem et diam.
                  </p>
                </TestimonialCardContentContainerDiv>
              </CardContainer>
              <CardContainer className="cardContainer">
                <TestimonialCardContentContainerDiv>
                  <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
                  <TestimonialCardHeader>Yolanda Simon</TestimonialCardHeader>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur dignissim, felis porttitor viverra imperdiet,
                    turpis sem sodales ligula, ut mattis massa sem et diam.
                  </p>
                </TestimonialCardContentContainerDiv>
              </CardContainer>
            </Carousel>
          </TestimonialCardContainerDiv>
        </TestimonialInnerContainerDiv>
      </TestimonialContainerSection>
    );
  }
}

{
  /* <Media query="(min-width: 900px)">
  {matches =>
    matches ? renderThreeCards() : renderCardCarousel(1)}
</Media> */
}

{
  /* <div className="carousel">
  <div style={divStyle} className="carousel-cell">
    Card One
  </div>
  <div style={divStyle} className="carousel-cell">
    Card Two
  </div>
  <div style={divStyle} className="carousel-cell">
    Card Three
  </div>
</div> */
}

/*******************************
 *** Testimonial Prop Section ***
 *******************************/

// /*  Switch to one card here. */
// @media (max-width: 900px) {
//   .hide-card--one {
//     display: none;
//   }
// }

// @media (max-width: 600px) {
//   .hide-card--two {
//     display: none;
//   }
// }

// /* Gonna need to have only one card display for mobile screens */
// .testimonial-card {
//   height: 50vh;
//   min-height: 300px;
//   max-height: 420px;
//   width: 220px;
//   margin: 0 0.4rem;
//   box-shadow: 0px 4px 30px -4px #555;
//   background: #fcfcfc;
// }

// @media (min-width: 524px) {
//   .testimonial-card {
//     width: 280px;
//   }
// }

// Was already commented out
/* .testimonial-icon-container::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -20px;
  left: calc(50% - 10px);
  height: 4px;
  width: 20px;
  background: #222;
} */
