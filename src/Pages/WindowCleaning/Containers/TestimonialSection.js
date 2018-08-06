import React, { Component } from "react";
import Media from "react-media";
import styled from "styled-components";
import { TweenMax } from "gsap";
import "../Styles/main.css";
import { FlexColJCAICenterSection } from "../../../LayoutStyledComponents";

const Section = FlexColJCAICenterSection.extend`background: #fcfcfc;`;

const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  height: 55vh;

  @media (max-width: 900px) {
    width: 130rem;
  }

  @media (max-width: 600px) {
    width: 100rem;
  }

  @media (max-width: 450px) {
    width: 80rem;
  }

  @media (min-width: 900px) {
    justify-content: center;
    width: 68rem;
    margin-bottom: 20vh;
  }
`;

const TestimonialHeader = styled.h2`
  margin: 10vh 0;
  color: ${props => props.theme.primaryColor}
  line-height: ${props => props.theme.headerLineHeight}
  letter-spacing: ${props => props.theme.headerLetterSpacing}
  font-size: ${props => props.theme.testimonialHeaderFontSize};
  font-family: ${props => props.theme.mainFont};

  @media (min-width: 752px) {
    font-size: ${props => props.theme.testimonialHeaderFontSize752W};
  }
`;

const TestimonialCircleHeader = styled.h3`
  margin: 1rem 0;
  line-height: ${props => props.theme.headerLineHeight}
  letter-spacing: ${props => props.theme.headerLetterSpacing}
  color: ${props => props.theme.paraColor}
  font-size: ${props => props.theme.testimonialCircleHeaderFontSize};
  font-family: ${props => props.theme.mainFont};

  @media (min-width: 752px) {
    font-size: ${props => props.theme.testimonialCircleHeaderFontSize752W};
  }
`;

const TestimonialCirclePara = styled.p`
  width: 68%;
  text-align: center;
  color: ${props => props.theme.paraColor}
  line-height: ${props => props.theme.paraLineHeight}
  letter-spacing: ${props => props.theme.paraLetterSpacing}
  font-size: ${props => props.theme.paraFontSize};
  font-family: ${props => props.theme.mainFont};

  @media (min-width: 752px) {
    font-size: ${props => props.theme.paraFontSize752W}
  }
`;

const TestimonialSliderIndicationDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 7rem;
  height: 2rem;
  margin-top: 5vh;
  margin-bottom: 10vh;
`;

const SmallCircleDiv = styled.div`
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  background: #999;
  background: ${props => (props.active ? "#84ceeb" : null)};
`;

// Do note, you're keeping track of screensize in Hamberguesa component as well
// Could move this up and then pass it down.
export default class TestimonialSection extends Component {
  state = {
    leftCircleActive: false,
    midCircleActive: false,
    rightCircleActive: false,
    showSlider: false
  };

  componentDidMount = () => {
    const { showSlider } = this.state;
    window.addEventListener("resize", this.updateScreenSize);
    if (window.innerWidth < 900 && !showSlider) {
      this.setState((prevState, state) => ({
        showSlider: true,
        midCircleActive: true
      }));
    }
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateScreenSize);
  };

  updateScreenSize = e => {
    const { showSlider } = this.state;
    if (e.target.innerWidth > 900) {
      TweenMax.set(".leftCircle100VW-container", { clearProps: "x" });
      TweenMax.set(".midCircle100VW-container", { clearProps: "x" });
      TweenMax.set(".rightCircle100VW-container", { clearProps: "x" });
      this.setState((prevState, state) => ({
        leftCircleActive: false,
        midCircleActive: false,
        rightCircleActive: false,
        showSlider: false
      }));
    } else if (e.target.innerWidth < 900) {
      this.setState((prevState, state) => ({
        midCircleActive: true,
        showSlider: true
      }));
    }
  };

  leftCircleSlideIn = () => {
    const { midCircleActive, rightCircleActive } = this.state;
    // TweenMax.set(this.mid, { display: "block" });
    // TweenMax.set(this.right, { display: "block" });
    if (midCircleActive) {
      TweenMax.fromTo(
        ".leftCircle100VW-container",
        0.4,
        { x: "-100%" },
        { x: "100%" }
      );
      TweenMax.fromTo(
        ".midCircle100VW-container",
        0.4,
        { x: "0%" },
        { x: "100%" }
      );
      TweenMax.fromTo(
        ".rightCircle100VW-container",
        0.4,
        { x: "100%" },
        { x: "200%" }
      );
    } else if (rightCircleActive) {
      TweenMax.fromTo(
        ".leftCircle100VW-container",
        0.4,
        { x: "-100%" },
        { x: "100%" }
      );
      TweenMax.fromTo(
        ".midCircle100VW-container",
        0.4,
        { x: "-40%" },
        { x: "100%" }
      );
      TweenMax.fromTo(
        ".rightCircle100VW-container",
        0.4,
        { x: "100%" },
        { x: "200%" }
      );
    }
  };

  midCircleSlideIn = () => {
    const { leftCircleActive, rightCircleActive } = this.state;
    if (leftCircleActive) {
      TweenMax.fromTo(
        ".leftCircle100VW-container",
        0.4,
        { x: "100%" },
        { x: "-20%" }
      );
      TweenMax.fromTo(
        ".midCircle100VW-container",
        0.4,
        { x: "100%" },
        { x: "0%" }
      );
      TweenMax.fromTo(
        ".rightCircle100VW-container",
        0.4,
        { x: "300%" },
        { x: "200%" }
      );
    } else if (rightCircleActive) {
      TweenMax.fromTo(
        ".leftCircle100VW-container",
        0.4,
        { x: "180%" },
        { x: "280%" }
      );
      TweenMax.fromTo(
        ".midCircle100VW-container",
        0.4,
        { x: "-100%" },
        { x: "0%" }
      );
      TweenMax.fromTo(
        ".rightCircle100VW-container",
        0.4,
        { x: "-100%" },
        { x: "20%" }
      );
    }
  };

  rightCircleSlideIn = () => {
    const { leftCircleActive, midCircleActive } = this.state;
    if (midCircleActive) {
      TweenMax.fromTo(
        ".leftCircle100VW-container",
        0.5,
        { x: "100%" },
        { x: "-200%" }
      );
      TweenMax.fromTo(
        ".midCircle100VW-container",
        0.5,
        { x: "0%" },
        { x: "-100%" }
      );
      TweenMax.fromTo(
        ".rightCircle100VW-container",
        0.5,
        { x: "100%" },
        { x: "-100%" }
      );
    } else if (leftCircleActive) {
      TweenMax.fromTo(
        ".leftCircle100VW-container",
        0.5,
        { x: "-100%" },
        { x: "-200%" }
      );
      TweenMax.fromTo(
        ".midCircle100VW-container",
        0.5,
        { x: "0%" },
        { x: "-100%" }
      );
      TweenMax.fromTo(
        ".rightCircle100VW-container",
        0.5,
        { x: "200%" },
        { x: "-100%" }
      );
    }
  };

  leftCircHoverOver = e => {
    TweenMax.fromTo(
      this.left,
      0.3,
      { scale: 1, border: "1px solid #999" },
      { scale: 1.04, border: "3px solid #84ceeb" }
    );
    TweenMax.fromTo(
      ".midCircle100VW-container",
      0.3,
      { x: 0, opacity: 1 },
      { x: 210, opacity: 0.3 }
    );
    TweenMax.fromTo(
      this.right,
      0.3,
      { x: 0, opacity: 1 },
      { x: 20, opacity: 0.2 }
    );
  };

  leftCircHoverOut = e => {
    TweenMax.fromTo(
      this.left,
      0.3,
      { scale: 1.04, border: "3px solid #84ceeb" },
      { scale: 1, border: "1px solid #999" }
    );
    TweenMax.fromTo(
      ".midCircle100VW-container",
      0.3,
      { x: 210, opacity: 0.3 },
      { x: 0, opacity: 1 }
    );
    TweenMax.fromTo(
      this.right,
      0.3,
      { x: 20, opacity: 0.2 },
      { x: 0, opacity: 1 }
    );
  };

  rightCircHoverOver = e => {
    TweenMax.fromTo(
      this.right,
      0.3,
      { scale: 1, border: "1px solid #999" },
      { scale: 1.04, border: "3px solid #84ceeb" }
    );
    TweenMax.fromTo(
      ".midCircle100VW-container",
      0.3,
      { x: 0, opacity: 1 },
      { x: -210, opacity: 0.3 }
    );
    TweenMax.fromTo(
      this.left,
      0.3,
      { x: 0, opacity: 1 },
      { x: -20, opacity: 0.2 }
    );
  };

  rightCircHoverOut = e => {
    TweenMax.fromTo(
      this.right,
      0.3,
      { scale: 1.04, border: "3px solid #84ceeb" },
      { scale: 1, border: "1px solid #999" }
    );
    TweenMax.fromTo(
      ".midCircle100VW-container",
      0.3,
      {
        x: -210,
        opacity: 0.3
      },
      {
        x: 0,
        opacity: 1
      }
    );
    TweenMax.fromTo(
      this.left,
      0.3,
      { x: -20, opacity: 0.2 },
      { x: 0, opacity: 1 }
    );
  };

  midCircHoverOver = e => {
    TweenMax.fromTo(
      this.mid,
      0.3,
      { scale: 1, border: "1px solid #999" },
      { scale: 1.04, border: "3px solid #84ceeb" }
    );
  };

  midCircHoverOut = e => {
    TweenMax.fromTo(
      this.mid,
      0.3,
      { scale: 1.04, border: "3px solid #84ceeb" },
      { scale: 1, border: "1px solid #999" }
    );
  };

  updateActiveCircle = e => {
    console.log("This is the target id: ", e.target.id);
    const id = e.target.id;
    if (id === "left-circle") {
      this.leftCircleSlideIn();
      this.setState((prevState, state) => ({
        leftCircleActive: true,
        midCircleActive: false,
        rightCircleActive: false
      }));
    } else if (id === "mid-circle") {
      this.midCircleSlideIn();
      this.setState((prevState, state) => ({
        leftCircleActive: false,
        midCircleActive: true,
        rightCircleActive: false
      }));
    } else if (id === "right-circle") {
      this.rightCircleSlideIn();
      this.setState((prevState, state) => ({
        leftCircleActive: false,
        midCircleActive: false,
        rightCircleActive: true
      }));
    }
  };

  // Applying position relative to the left or right circles so that they
  // get back into the regular flow of the document to facilitate slider animation.
  render() {
    const {
      leftCircleActive,
      midCircleActive,
      rightCircleActive,
      showSlider
    } = this.state;
    const posRelative = {
      position: "relative",
      left: "0",
      right: "0"
    };
    return (
      <Section>
        <TestimonialHeader>Testimonials</TestimonialHeader>
        <ContainerDiv className="daContainerDiv">
          <div className="leftCircle100VW-container">
            <div
              id="testimonial-circle-left"
              className="testimonial-circle"
              onMouseOver={this.leftCircHoverOver}
              onMouseOut={this.leftCircHoverOut}
              ref={x => (this.left = x)}
              style={showSlider ? leftCircleActive ? posRelative : null : null}
            >
              <TestimonialCircleHeader>Janet Janson</TestimonialCircleHeader>
              <TestimonialCirclePara>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur dignissim, felis orttitor viverra imperdiet, turpis
                sem sodales ligula, ut mattis massa sem et diam.
              </TestimonialCirclePara>
            </div>
          </div>
          <div className="midCircle100VW-container">
            <div
              id="testimonial-circle-mid"
              className="testimonial-circle"
              ref={x => (this.mid = x)}
              onMouseOver={this.midCircHoverOver}
              onMouseOut={this.midCircHoverOut}
              style={showSlider ? midCircleActive ? null : null : null}
            >
              <TestimonialCircleHeader>Jeff Hayworthy</TestimonialCircleHeader>
              <TestimonialCirclePara>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur dignissim, felis orttitor viverra imperdiet, turpis
                sem sodales ligula, ut mattis massa sem et diam.
              </TestimonialCirclePara>
            </div>
          </div>
          <div className="rightCircle100VW-container">
            <div
              id="testimonial-circle-right"
              className="testimonial-circle"
              onMouseOver={this.rightCircHoverOver}
              onMouseOut={this.rightCircHoverOut}
              ref={x => (this.right = x)}
              style={showSlider ? rightCircleActive ? posRelative : null : null}
            >
              <TestimonialCircleHeader>Todd Tilgiver</TestimonialCircleHeader>
              <TestimonialCirclePara>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Curabitur dignissim, felis orttitor viverra imperdiet, turpis
                sem sodales ligula, ut mattis massa sem et diam.
              </TestimonialCirclePara>
            </div>
          </div>
        </ContainerDiv>
        <Media query="(max-width: 900px)">
          {matches =>
            matches ? (
              <TestimonialSliderIndicationDiv>
                <SmallCircleDiv
                  id="left-circle"
                  onClick={this.updateActiveCircle}
                  active={leftCircleActive}
                />
                <SmallCircleDiv
                  id="mid-circle"
                  onClick={this.updateActiveCircle}
                  active={midCircleActive}
                />
                <SmallCircleDiv
                  id="right-circle"
                  onClick={this.updateActiveCircle}
                  active={rightCircleActive}
                />
              </TestimonialSliderIndicationDiv>
            ) : null}
        </Media>
      </Section>
    );
  }
}
