import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Media from "react-media";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { ScrollToPlugin } from "gsap/src/uncompressed/plugins/ScrollToPlugin";
// import { CSSPlugin } from "gsap/src/uncompressed/plugins/CSSPlugin";
import "../Styles/main.css";
import { FlexColJCAICenterSection } from "../../../LayoutStyledComponents";

const Section = FlexColJCAICenterSection.extend`
  background: #fcfcfc;
`;

// TODO:
// AND FINALLY - integrate swipe feature, lock points on swipe.
// Fix pressure washing quote form bug... 603020
// Oh.. and fix the svg menu animation.
// DEPLOYY!!!

// const ContainerDiv = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0;
//   height: 55vh;
//   background: papayawhip;
//   width: 100vw;
//   overflow-x: auto;

//   // @media (max-width: 900px) {
//   //   width: 140vw;
//   //   background: yellow;
//   // }

//   // @media (max-width: 600px) {
//   //   width: 160vw;
//   //   background: lime;
//   // }

//   // @media (max-width: 450px) {
//   //   width: 200vw
//   //   background: blue;
//   // }

//   @media (min-width: 900px) {
//     justify-content: center;
//     width: 68rem;
//     margin-bottom: 20vh;
//   }
// `;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  overflow-x: hidden;

  @media (min-width: 900px) {
    justify-content: center;
    margin-bottom: 20vh;
  }
`;

// Keys to the slider
const Slider = styled.div`
  position: relative;
  display: flex;
  width: 100vw;
  height: 75vh;
  overflow-x: hidden;
  background: lime;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;

  @media (min-width: 900px) {
    justify-content: center;
    align-items: center;
    width: 68rem;
    overflow-x: hidden;
  }
`;

// Moving these styles to main.css -> leftCircle100VW-container, mid, right
// const Slide = styled.div`
//   width: 120vw;
//   flex-shrink: 0;
//   height: 100%;
// `;

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

const SmallCircle = styled.div`
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
    midCircleActive: true,
    rightCircleActive: false,
    showSlider: false,
    scrollLeftPos: null,
    activeDivLeftPos: null,
    mouseDown: false
  };

  componentDidUpdate = (prevProps, prevState) => {
    console.log("UPDATED STATE: ", this.state);
  };

  componentDidMount = () => {
    const { showSlider } = this.state;
    window.addEventListener("resize", this.updateScreenSize);
    this.slider.addEventListener("mouseout", this.endMouseDown);
    if (window.innerWidth < 900 && !showSlider) {
      const leftPos = this.midCircContainer.getBoundingClientRect().left;
      this.slider.scrollLeft = leftPos;
      this.setState((prevState, state) => ({
        showSlider: true,
        midCircleActive: true,
        scrollLeftPos: leftPos
      }));
    }
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (nextState.scrollLeftPos === this.state.scrollLeftPos) {
      return false;
    }
    return true;
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateScreenSize);
    this.slider.removeEventListener("mouseout", this.endMouseDown);
  };

  updateScreenSize = e => {
    if (e.target.innerWidth > 900) {
      TweenMax.set(".leftCircle100VW-container", { clearProps: "x" });
      TweenMax.set(".midCircle100VW-container", { clearProps: "x" });
      TweenMax.set(".rightCircle100VW-container", { clearProps: "x" });
      TweenMax.set(".leftCircle100VW-container", { zIndex: 0 });
      TweenMax.set(".midCircle100VW-container", { zIndex: 20 });
      TweenMax.set(".rightCircle100VW-container", { zIndex: 0 });
      this.setState({
        showSlider: false
      });
    } else if (e.target.innerWidth < 900) {
      if (this.state.midCircleActive) {
        // Using width instead of left, because left yields strange results hovering around 0 and -3, etc.
        // Causing the animation to be janky for the first few clicks after resize.
        const scrollToPos = this.midCircContainer.getBoundingClientRect().width;
        this.slider.scrollLeft = scrollToPos;
        // showSlider must be set to true in order for the circles to be styled w/ position absolute.
        this.setState((prevState, state) => ({
          showSlider: true,
          scrollLeftPos: scrollToPos
        }));
      } else if (this.state.rightCircleActive) {
        TweenMax.set(".rightCircle100VW-container", { zIndex: 1000 });
        const scrollToPos =
          this.rightCircContainer.getBoundingClientRect().width * 2;
        this.slider.scrollLeft = scrollToPos;
        this.setState((prevState, state) => ({
          showSlider: true,
          scrollLeftPos: scrollToPos
        }));
      } else {
        TweenMax.set(".leftCircle100VW-container", { zIndex: 1000 });
        this.setState((prevState, state) => ({
          showSlider: true
        }));
      }
    }
  };

  endMouseDown = e => {
    if (!this.state.mouseDown) return;
    console.log("END MOUSE DOWN FIRING");
    this.resetSliderDragDefault(true);
    if (this.state.mouseDown) {
      this.setState({
        mouseDown: false
      });
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

  setStateLeftCircleActive = () => {
    this.setState((prevState, state) => ({
      leftCircleActive: true,
      midCircleActive: false,
      rightCircleActive: false
    }));
    return this.leftCircContainer.getBoundingClientRect().left;
  };

  setStateMidCircleActive = scrollToPos => {
    this.setState((prevState, state) => ({
      leftCircleActive: false,
      midCircleActive: true,
      rightCircleActive: false,
      scrollLeftPos: scrollToPos
    }));
    return this.midCircContainer.getBoundingClientRect().left;
  };

  setStateRightCircleActive = () => {
    this.setState((prevState, state) => ({
      leftCircleActive: false,
      midCircleActive: false,
      rightCircleActive: true
    }));
    return this.rightCircContainer.getBoundingClientRect().left;
  };

  updateActiveCircle = e => {
    TweenMax.set(".leftCircle100VW-container", { zIndex: 0 });
    TweenMax.set(".midCircle100VW-container", { zIndex: 0 });
    TweenMax.set(".rightCircle100VW-container", { zIndex: 0 });
    e.preventDefault();
    let divLeftPos;
    const id = e.target.id;
    if (id === "left-circle") {
      divLeftPos = this.setStateLeftCircleActive();
    } else if (id === "mid-circle") {
      divLeftPos = this.setStateMidCircleActive();
    } else if (id === "right-circle") {
      divLeftPos = this.setStateRightCircleActive();
    }
    const scrollToPos = this.state.scrollLeftPos + divLeftPos;
    if (id === "left-circle") {
      TweenMax.set(".leftCircle100VW-container", { zIndex: 1000 });
      TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
    } else if (id === "mid-circle") {
      TweenMax.set(".midCircle100VW-container", { zIndex: 1000 });
      TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
    } else if (id === "right-circle") {
      console.log("THE state SCROLL left POS: ", this.state.scrollLeftPos);
      console.log("THE RIGHT CIRCLES divleftpos: ", divLeftPos);
      console.log("THE RIGHT CIRCLES SCROLL TO POS: ", scrollToPos);
      TweenMax.set(".rightCircle100VW-container", { zIndex: 1000 });
      TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
    }
    this.setState({
      scrollLeftPos: scrollToPos
    });
  };

  // You need to set state for the position of e.clientX
  // that way it can be used to determine new scrollLeft position on mouseMove, as
  // the current implementation causes the left and right circles to animate back to the
  // middle div with the slightest move.
  handleMouseDown = e => {
    e.target.classList.add("prevent-highlight-text");
    this.setState({
      mouseDown: true
    });
  };

  handleMouseUp = e => {
    if (!this.state.mouseDown) return;
    console.log("THE CLIENT X ON MOUSE UP: ", e.clientX);
    console.log("THIS IS THE TARGET: ", e.currentTarget);
    e.target.classList.remove("prevent-highlight-text");
    const windowInnerWidth = window.innerWidth;
    const halfWindowInnerWidth = window.innerWidth / 2;
    const oneFourthWindowInnerWidth = halfWindowInnerWidth / 2;
    const threeFourthWindowInnerWidth =
      halfWindowInnerWidth + oneFourthWindowInnerWidth;
    if (e.clientX < oneFourthWindowInnerWidth) {
      // Then the next circle to the left should slide into view.
      const nextRightActiveCircleClassName = e.currentTarget.nextElementSibling
        ? e.currentTarget.nextElementSibling.className
        : null;
      if (nextRightActiveCircleClassName === "midCircle100VW-container") {
        this.setStateMidCircleActive();
        const scrollToPos = this.midCircContainer.getBoundingClientRect().width;
        this.setState({
          scrollLeftPos: scrollToPos
        });
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
      } else if (
        nextRightActiveCircleClassName === "rightCircle100VW-container"
      ) {
        this.setStateRightCircleActive();
        const scrollToPos =
          this.rightCircContainer.getBoundingClientRect().width * 2;
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
        this.setState({
          scrollLeftPos: scrollToPos
        });
      }
    } else if (e.clientX > threeFourthWindowInnerWidth) {
      // Then the next circle to the right should slide into view.
      const nextLeftActiveCircleClassName = e.currentTarget
        .previousElementSibling
        ? e.currentTarget.previousElementSibling.className
        : null;
      if (nextLeftActiveCircleClassName === "leftCircle100VW-container") {
        this.setStateLeftCircleActive();
        this.setState({
          scrollLeftPos: 0
        });
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: 0 } });
      } else if (nextLeftActiveCircleClassName === "midCircle100VW-container") {
        this.setStateMidCircleActive();
        const scrollToPos =
          this.state.scrollLeftPos -
          this.midCircContainer.getBoundingClientRect().width;
        this.setState({
          scrollLeftPos: scrollToPos
        });
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
      }
    } else {
      // resets circle div to default position if it wasn't dragged
      // far enough to scroll the next div in
      this.resetSliderDragDefault();
    }

    this.setState((prevState, state) => ({
      mouseDown: false
    }));
  };

  resetSliderDragDefault = mouseOutDragEnd => {
    const { leftCircleActive, midCircleActive, rightCircleActive } = this.state;
    if (leftCircleActive) {
      if (mouseOutDragEnd) {
        const scrollToPos = this.midCircContainer.getBoundingClientRect().width;
        this.setStateMidCircleActive(scrollToPos);
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
      } else {
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: 0 } });
      }
    } else if (midCircleActive) {
      const scrollToPos = this.midCircContainer.getBoundingClientRect().width;
      TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
    } else if (rightCircleActive) {
      if (mouseOutDragEnd) {
        const scrollToPos = this.midCircContainer.getBoundingClientRect().width;
        this.setStateMidCircleActive(scrollToPos);
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
      } else {
        const scrollToPos =
          this.rightCircContainer.getBoundingClientRect().width * 2;
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
      }
    }
  };

  handleMouseMove = e => {
    const {
      mouseDown,
      leftCircleActive,
      midCircleActive,
      rightCircleActive
    } = this.state;
    if (mouseDown) {
      // console.log("MOUSE A MOVIN'");
      // console.log("e.ClientX: ", e.clientX);
      // console.log("window.innerWidth: ", window.innerWidth);
      const windowInnerWidth = window.innerWidth;
      const halfWindowInnerWidth = window.innerWidth / 2;
      const oneFourthWindowInnerWidth = halfWindowInnerWidth / 2;
      const threeFourthWindowInnerWidth =
        halfWindowInnerWidth + oneFourthWindowInnerWidth;
      this.dragCircle(e.clientX, halfWindowInnerWidth);
    }
  };

  dragCircle = (clientX, halfWindowInnerWidth) => {
    // clientX greater than halfWindowInnerWidth yields positive difference,
    // subtracted by state.scrollLeftPos yields result that scrolls to the left
    // clientX less than halfWindowInnerWidth yields negative difference,
    // subtracted by state.scrollLeftPos yields result that scrolls to the right
    const difference = (clientX - halfWindowInnerWidth) / 0.7;
    const scrollToPos = this.state.scrollLeftPos - difference;
    TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
  };

  render() {
    const {
      leftCircleActive,
      midCircleActive,
      rightCircleActive,
      showSlider
    } = this.state;
    const posAbsolute = {
      position: "absolute"
    };
    return (
      <Section>
        <TestimonialHeader>Testimonials</TestimonialHeader>
        <Container>
          <Slider ref={x => (this.slider = ReactDOM.findDOMNode(x))}>
            <div
              id="leftCircleContainer"
              className="leftCircle100VW-container"
              ref={x => (this.leftCircContainer = x)}
              onMouseUp={showSlider ? this.handleMouseUp : null}
            >
              <div
                id="testimonial-circle-left"
                className="testimonial-circle"
                onMouseOver={this.leftCircHoverOver}
                onMouseOut={this.leftCircHoverOut}
                ref={x => (this.left = x)}
                style={showSlider ? posAbsolute : null}
                onMouseDown={showSlider ? this.handleMouseDown : null}
                onMouseMove={showSlider ? this.handleMouseMove : null}
              >
                <TestimonialCircleHeader>Janet Janson</TestimonialCircleHeader>
                <TestimonialCirclePara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur dignissim, felis orttitor viverra imperdiet, turpis
                  sem sodales ligula, ut mattis massa sem et diam.
                </TestimonialCirclePara>
              </div>
            </div>
            <div
              id="midCircleContainer"
              className="midCircle100VW-container"
              ref={x => (this.midCircContainer = x)}
              onMouseUp={showSlider ? this.handleMouseUp : null}
            >
              <div
                id="testimonial-circle-mid"
                className="testimonial-circle"
                onMouseOver={this.midCircHoverOver}
                onMouseOut={this.midCircHoverOut}
                ref={x => (this.mid = x)}
                style={showSlider ? posAbsolute : null}
                onMouseDown={showSlider ? this.handleMouseDown : null}
                onMouseMove={showSlider ? this.handleMouseMove : null}
              >
                <TestimonialCircleHeader>
                  John Hayworthy
                </TestimonialCircleHeader>
                <TestimonialCirclePara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur dignissim, felis orttitor viverra imperdiet, turpis
                  sem sodales ligula, ut mattis massa sem et diam.
                </TestimonialCirclePara>
              </div>
            </div>
            <div
              id="rightCircleContainer"
              className="rightCircle100VW-container"
              ref={x => (this.rightCircContainer = x)}
              onMouseUp={showSlider ? this.handleMouseUp : null}
            >
              <div
                id="testimonial-circle-right"
                className="testimonial-circle"
                onMouseOver={this.rightCircHoverOver}
                onMouseOut={this.rightCircHoverOut}
                ref={x => (this.right = x)}
                style={showSlider ? posAbsolute : null}
                onMouseDown={showSlider ? this.handleMouseDown : null}
                onMouseMove={showSlider ? this.handleMouseMove : null}
              >
                <TestimonialCircleHeader>Buck Gordon</TestimonialCircleHeader>
                <TestimonialCirclePara>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur dignissim, felis orttitor viverra imperdiet, turpis
                  sem sodales ligula, ut mattis massa sem et diam.
                </TestimonialCirclePara>
              </div>
            </div>
          </Slider>
        </Container>
        {showSlider ? (
          <TestimonialSliderIndicationDiv>
            <SmallCircle
              id="left-circle"
              onClick={this.updateActiveCircle}
              active={leftCircleActive}
            />
            <SmallCircle
              id="mid-circle"
              onClick={this.updateActiveCircle}
              active={midCircleActive}
            />
            <SmallCircle
              id="right-circle"
              onClick={this.updateActiveCircle}
              active={rightCircleActive}
            />
          </TestimonialSliderIndicationDiv>
        ) : null}
      </Section>
    );
  }
}
