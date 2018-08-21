import React, { Component, Fragment } from "react";
import Media from "react-media";
import styled from "styled-components";
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
  padding: 0;
  color: #fcfcfc;
  background: maroon;
`;

const TestimonialInnerContainerDiv = FlexColJCAICenterDiv.extend`
  padding: 0;
  width: 90%;
  max-width: 60rem;
  margin-bottom: 10vh;
  background: orange;
  & > h2 {
    font-size: 2rem;
    margin-top: 10vh;
  }
`;

const TestimonialCardContainerDiv = FlexJCAICenterDiv.extend`
  align-self: center;
  width: 100%;
  margin-top: 4vh;
  background: blue;
`;

const CardContainer = styled.div`
  // position: absolute;
  // left: 35vw;
  width: 21rem;
  height: 100%;
`;

const TestimonialCard = FlexColJCAICenterDiv.extend`
  height: 50vh;
  min-height: 300px;
  max-height: 420px;
  width: 220px;
  margin: 0 0.4rem;
  box-shadow: 0px 4px 30px -4px #555;
  background: #fcfcfc;

  @media (min-width: 400px) {
    width: 280px;
  }
`;

const TestimonialCardContentContainerDiv = FlexColAICenterDiv.extend`
  height: 85%;
  padding: 0;
  width: 85%;
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
    const divStyleTwo = { width: "21rem" };
    return (
      <TestimonialContainerSection>
        <TestimonialInnerContainerDiv>
          <h2>What Our Clients Are Saying</h2>
          <div style={divStyleTwo} className="carousel-cell">
            <CardContainer className="cardContainer">
              <TestimonialCardContentContainerDiv>
                <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
                <TestimonialCardHeader>Jenn Burke</TestimonialCardHeader>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur dignissim, felis porttitor viverra imperdiet, turpis
                  sem sodales ligula, ut mattis massa sem et diam.
                </p>
              </TestimonialCardContentContainerDiv>
            </CardContainer>
          </div>
          <div style={divStyleTwo} className="carousel-cell">
            <CardContainer className="cardContainer">
              <TestimonialCardContentContainerDiv>
                <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
                <TestimonialCardHeader>Hank Murphey</TestimonialCardHeader>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur dignissim, felis porttitor viverra imperdiet, turpis
                  sem sodales ligula, ut mattis massa sem et diam.
                </p>
              </TestimonialCardContentContainerDiv>
            </CardContainer>
          </div>
          <div style={divStyleTwo} className="carousel-cell">
            <CardContainer className="cardContainer">
              <TestimonialCardContentContainerDiv>
                <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
                <TestimonialCardHeader>Yolanda Simon</TestimonialCardHeader>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur dignissim, felis porttitor viverra imperdiet, turpis
                  sem sodales ligula, ut mattis massa sem et diam.
                </p>
              </TestimonialCardContentContainerDiv>
            </CardContainer>
          </div>
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
