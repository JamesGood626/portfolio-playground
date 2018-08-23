import React, { Component, Fragment } from "react";
// import Media from "react-media";
import styled from "styled-components";
import Carousel from "nuka-carousel";
import JennBurkeImg from "../images/jenn_burke.png";
import HankMurpheyImg from "../images/hank_murphey.png";
import HannahAltelImg from "../images/hannah_altel.png";
// import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import {
  FlexJCCenterAIStartSection,
  FlexJCAICenterDiv,
  FlexColJCAICenterDiv,
  FlexColAICenterDiv
} from "../../../LayoutStyledComponents";

// Okay, need to adjust height of cards on the smallest of screen sizes, as the
// paragraph text is overflowing out of the div. It's really only a problem on
// screens less than 350px.

const TestimonialContainerSection = FlexJCCenterAIStartSection.extend`
  width: 100%;
  height: 41rem;
  min-height: 41rem;
  padding: 0;
  // padding-bottom: 2rem;
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
  }

  @media (min-width: 500px) {
    & > h2 {
      font-size: ${props => props.theme.headerLevelTwoFontSize500W};
    }
  }
`;

const TestimonialCardContainerDiv = styled.div`
  width: 100%;
  height: 24rem;
  min-height: 24rem;
  // margin-top: -2rem;
  // background: red;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  // background: blue;
  margin-top: 1.8rem;
  // bring/pushes slider dots to/from card.
  margin-bottom: 2rem;
`;

// const TestimonialCard = FlexColJCAICenterDiv.extend`
//   height: 50vh;
//   min-height: 300px;
//   max-height: 420px;
//   width: 220px;
//   box-shadow: 0px 4px 30px -4px #555;
//   background: ${props => props.theme.whiteColor};

//   @media (min-width: 400px) {
//     width: 280px;
//   }
// `;

const TestimonialCardContentContainerDiv = FlexColAICenterDiv.extend`
  // width: 15rem;
  // height: 22rem;
  height: 420px;
  width: 320px;
  margin: 2rem 2rem;
  padding: 0;
  background: ${props => props.theme.whiteColor};

  & > p {
    font-family: ${props => props.theme.secondaryFont};
    font-size: ${props => props.theme.paraFontSize};
    line-height: ${props => props.theme.paraLineHeight};
    letter-spacing: ${props => props.theme.paraLetterSpacing};
    align-text: center;
    color: #000;
    margin-top: 0.4rem;
    padding: 0 2rem;
    padding-bottom: 2rem;
  }

  @media (min-width: 542px) {
    .services-card {
      width: 350px;
    }
  }
`;

const TestimonialIconContainerDiv = styled.div`
  position: relative;
  height: 7.6rem;
  min-height: 7.6rem;
  width: 7.6rem;
  min-width: 7.6rem;
  margin-top: 1.2rem;
  border: 3px solid #222;
  transform: rotate(45deg);
  overflow: hidden;
`;

const IconImg = styled.img`
  position: absolute;
  top: -2rem;
  left: -2.2rem;
  height: 180px;
  width: 180px;
  transform: rotate(315deg);
`;

const TestimonialCardHeader = styled.h3`
  position: relative;
  font-size: ${props => props.theme.cardHeaderFontSize};
  color: #000;
  margin-top: 2rem;

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
      fill: ${props => props.theme.whiteColor};
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

const TestimonialCard = FlexColJCAICenterDiv.extend`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  height: 420px;
  width: 320px;
  margin: 0rem 2rem;
  margin-bottom: 3rem;
  box-shadow: 0px 4px 30px -4px #555;
  background: #fcfcfc;

  @media (min-width: 542px) {
    .services-card {
      width: 350px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const TestimonialeCardContentContainerDiv = FlexColAICenterDiv.extend`
  height: 85%;
  padding: 0;
  width: 85%;
  color: #000;
  text-align: center;

  & > h3 {
    font-size: ${props => props.theme.cardHeaderFontSize};
  }

  & > p {
    width: 100%;
    margin-top: 0.6rem;
    font-family: ${props => props.theme.secondaryFont};
    font-size: ${props => props.theme.paraFontSize};
    line-height: ${props => props.theme.paraLineHeight};
    letter-spacing: ${props => props.theme.paraLetterSpacing};
  }

  @media (min-width: 500px) {
    & > h3 {
      font-size: ${props => props.theme.cardHeaderFontSize500W};
    }
  }
`;

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
                <TestimonialCard>
                  <TestimonialeCardContentContainerDiv>
                    <TestimonialIconContainerDiv>
                      <IconImg src={JennBurkeImg} />
                    </TestimonialIconContainerDiv>
                    <TestimonialCardHeader>Jenn Burke</TestimonialCardHeader>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur dignissim, felis porttitor viverra imperdiet,
                      turpis sem sodales ligula, ut mattis massa sem et diam.
                    </p>
                  </TestimonialeCardContentContainerDiv>
                </TestimonialCard>
              </CardContainer>
              <CardContainer className="cardContainer">
                <TestimonialCard>
                  <TestimonialeCardContentContainerDiv>
                    <TestimonialIconContainerDiv>
                      <IconImg src={HankMurpheyImg} />
                    </TestimonialIconContainerDiv>
                    <TestimonialCardHeader>Hank Murphey</TestimonialCardHeader>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur dignissim, felis porttitor viverra imperdiet,
                      turpis sem sodales ligula, ut mattis massa sem et diam.
                    </p>
                  </TestimonialeCardContentContainerDiv>
                </TestimonialCard>
              </CardContainer>
              <CardContainer className="cardContainer">
                <TestimonialCard>
                  <TestimonialeCardContentContainerDiv>
                    <TestimonialIconContainerDiv>
                      <IconImg src={HannahAltelImg} />
                    </TestimonialIconContainerDiv>
                    <TestimonialCardHeader>Hannah Altel</TestimonialCardHeader>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Curabitur dignissim, felis porttitor viverra imperdiet,
                      turpis sem sodales ligula, ut mattis massa sem et diam.
                    </p>
                  </TestimonialeCardContentContainerDiv>
                </TestimonialCard>
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
