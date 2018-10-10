import React, { Component } from "react";
import ReactDOM from "react-dom";
// import Media from "react-media";
import styled from "styled-components";
import { TweenMax } from "gsap";
import { ScrollToPlugin } from "gsap/src/uncompressed/plugins/ScrollToPlugin";
// import { CSSPlugin } from "gsap/src/uncompressed/plugins/CSSPlugin";
import "../Styles/main.css";
import { FlexColJCAICenterSection } from "../../../LayoutStyledComponents";

// TODO:
// fix overscroll on right circle

const Section = FlexColJCAICenterSection.extend`
  background: #fcfcfc;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 50vh;
  min-height: 33rem;
  width: 100vw;
  // overflow: visible;

  @media (max-width: 320px) {
    height: 100vh;
  }

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
  height: 50vh;
  min-height: 32rem;

  // horizontal scrolling is disabled without overflow-x
  overflow-x: hidden;
  scroll-snap-points-x: repeat(100%);
  scroll-snap-type: mandatory;

  @media (max-width: 320px) {
    height: 100vh;
  }

  @media (min-width: 900px) {
    justify-content: center;
    align-items: center;
    width: 68rem;
    overflow-x: hidden;
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

const SmallCircle = styled.div`
  position: relative;
  z-index: 100;
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

  componentDidMount = () => {
    const { showSlider } = this.state;
    window.addEventListener("resize", this.updateScreenSize);
    this.left.addEventListener("touchmove", this.disableYScroll, false);
    this.mid.addEventListener("touchmove", this.disableYScroll, false);
    this.right.addEventListener("touchmove", this.disableYScroll, false);
    this.slider.addEventListener("mouseout", this.endMouseDown);
    if (window.innerWidth < 900 && !showSlider) {
      const leftPos = this.midCircContainer.getBoundingClientRect().left;
      this.slider.scrollLeft = leftPos;
      this.setState({
        showSlider: true,
        midCircleActive: true,
        scrollLeftPos: leftPos
      });
    }
  };

  shouldComponentUpdate = (nextProps, nextState) => {
    if (
      nextState.scrollLeftPos === this.state.scrollLeftPos &&
      nextState.showSlider === this.state.showSlider
    ) {
      return false;
    }
    return true;
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateScreenSize);
    this.slider.removeEventListener("mouseout", this.endMouseDown);
    this.left.removeEventListener("touchmove", this.disableYScroll);
    this.mid.removeEventListener("touchmove", this.disableYScroll);
    this.right.removeEventListener("touchmove", this.disableYScroll);
  };

  disableYScroll = e => {
    e.preventDefault();
  };

  // enableYScroll = e => {
  //   console.log("enable y scroll");
  //   document.documentElement.style.overflow = "auto";
  // };

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
        this.setState((state, props) => ({
          showSlider: true,
          scrollLeftPos: scrollToPos
        }));
      } else if (this.state.rightCircleActive) {
        TweenMax.set(".rightCircle100VW-container", { zIndex: 1000 });
        const scrollToPos =
          this.rightCircContainer.getBoundingClientRect().width * 2;
        this.slider.scrollLeft = scrollToPos;
        this.setState((state, props) => ({
          showSlider: true,
          scrollLeftPos: scrollToPos
        }));
      } else {
        TweenMax.set(".leftCircle100VW-container", { zIndex: 1000 });
        this.setState((state, props) => ({
          showSlider: true
        }));
      }
    }
  };

  endMouseDown = e => {
    if (!this.state.mouseDown) return;
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
    this.setState({
      leftCircleActive: true,
      midCircleActive: false,
      rightCircleActive: false
    });
    return this.leftCircContainer.getBoundingClientRect().left;
  };

  setStateMidCircleActive = scrollToPos => {
    this.setState({
      leftCircleActive: false,
      midCircleActive: true,
      rightCircleActive: false,
      scrollLeftPos: scrollToPos
    });
    return this.midCircContainer.getBoundingClientRect().left;
  };

  setStateRightCircleActive = () => {
    this.setState({
      leftCircleActive: false,
      midCircleActive: false,
      rightCircleActive: true
    });
    return this.rightCircContainer.getBoundingClientRect().left;
  };

  updateActiveCircle = e => {
    // Also passing in e as "left-circle", "mid-circle"
    // inside of mouseUp and touchEnd function which handles
    // animating to next circle and updating state.
    // necessary to have the z index update.
    this.right.style.zIndex = 0;
    this.mid.style.zIndex = 0;
    this.left.style.zIndex = 0;
    if (e.target) {
      e.preventDefault();
    }
    let divLeftPos;
    const id = e.target ? e.target.id : e;
    if (id === "left-circle") {
      divLeftPos = this.setStateLeftCircleActive();
    } else if (id === "mid-circle") {
      divLeftPos = this.setStateMidCircleActive();
    } else if (id === "right-circle") {
      divLeftPos = this.setStateRightCircleActive();
    }
    const scrollToPos = this.state.scrollLeftPos + divLeftPos;
    if (id === "left-circle") {
      this.left.style.zIndex = 1000;
      TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
    } else if (id === "mid-circle") {
      this.mid.style.zIndex = 1000;
      TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
    } else if (id === "right-circle") {
      this.right.style.zIndex = 1000;
      TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
    }
    this.setState({
      scrollLeftPos: scrollToPos
    });
  };

  mouseDownOrTouchStartLogic = classList => {
    classList.add("prevent-highlight-text");
    this.setState({
      mouseDown: true
    });
  };

  mouseMoveOrTouchMoveLogic = clientX => {
    const { mouseDown, rightCircleActive } = this.state;
    if (mouseDown) {
      const halfWindowInnerWidth = window.innerWidth / 2;
      this.dragCircle(clientX, halfWindowInnerWidth);
    }
  };

  mouseUpOrTouchEndLogic = (clientX, currentTarget, classList) => {
    if (!this.state.mouseDown) return;
    classList.remove("prevent-highlight-text");
    const halfWindowInnerWidth = window.innerWidth / 2;
    const oneFourthWindowInnerWidth = halfWindowInnerWidth / 2;
    const threeFourthWindowInnerWidth =
      halfWindowInnerWidth + oneFourthWindowInnerWidth;
    if (clientX < oneFourthWindowInnerWidth) {
      // Then the next circle to the left should slide into view.
      const nextRightActiveCircleClassName = currentTarget.nextElementSibling
        ? currentTarget.nextElementSibling.className
        : null;
      if (nextRightActiveCircleClassName === "midCircle100VW-container") {
        this.updateActiveCircle("mid-circle");
        const scrollToPos = this.midCircContainer.getBoundingClientRect().width;
        this.setState({
          scrollLeftPos: scrollToPos
        });
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
      } else if (
        nextRightActiveCircleClassName === "rightCircle100VW-container"
      ) {
        this.updateActiveCircle("right-circle");
        const scrollToPos =
          this.rightCircContainer.getBoundingClientRect().width * 2;
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
        this.setState({
          scrollLeftPos: scrollToPos
        });
      }
    } else if (clientX > threeFourthWindowInnerWidth) {
      // Then the next circle to the right should slide into view.
      const nextLeftActiveCircleClassName = currentTarget.previousElementSibling
        ? currentTarget.previousElementSibling.className
        : null;
      if (nextLeftActiveCircleClassName === "leftCircle100VW-container") {
        this.updateActiveCircle("left-circle");
        this.setState({
          scrollLeftPos: 0
        });
        TweenMax.to(this.slider, 0.5, { scrollTo: { x: 0 } });
      } else if (nextLeftActiveCircleClassName === "midCircle100VW-container") {
        this.updateActiveCircle("mid-circle");
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
      // odd.. when looking to fix the scroll past the right of the right div's overflow
      // it will reset itself to default position ONLY IF it isn't dragged all the way
      // to the left hand side of the screen.
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

  dragCircle = (clientX, halfWindowInnerWidth) => {
    // clientX greater than halfWindowInnerWidth yields positive difference,
    // subtracted by state.scrollLeftPos yields result that scrolls to the left
    // clientX less than halfWindowInnerWidth yields negative difference,
    // subtracted by state.scrollLeftPos yields result that scrolls to the right
    const difference = (clientX - halfWindowInnerWidth) / 0.7;
    const scrollToPos = this.state.scrollLeftPos - difference;
    TweenMax.to(this.slider, 0.5, { scrollTo: { x: scrollToPos } });
  };

  // You need to set state for the position of e.clientX
  // that way it can be used to determine new scrollLeft position on mouseMove, as
  // the current implementation causes the left and right circles to animate back to the
  // middle div with the slightest move.
  handleMouseDown = e => {
    this.mouseDownOrTouchStartLogic(e.target.classList);
  };

  handleMouseMove = e => {
    this.mouseMoveOrTouchMoveLogic(e.clientX);
  };

  handleMouseUp = e => {
    this.mouseUpOrTouchEndLogic(e.clientX, e.currentTarget, e.target.classList);
  };

  handleTouchStart = e => {
    this.mouseDownOrTouchStartLogic(e.target.classList);
  };

  handleTouchMove = e => {
    this.mouseMoveOrTouchMoveLogic(e.changedTouches[0].clientX);
  };

  handleTouchEnd = e => {
    this.mouseUpOrTouchEndLogic(
      e.changedTouches[0].clientX,
      e.currentTarget,
      e.target.classList
    );
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
          <Slider
            // className="testimonial-slider"
            ref={x => (this.slider = ReactDOM.findDOMNode(x))}
          >
            <div
              // mouseUp is firing twice, don't know if it's cause I'm on the virtual mobiel device,
              // but wouldn't hurt to add a check in to setState if on a mobile device to prevent it from
              // firing.
              id="leftCircleContainer"
              className="leftCircle100VW-container"
              ref={x => (this.leftCircContainer = x)}
              onMouseUp={showSlider ? this.handleMouseUp : null}
              onTouchEnd={showSlider ? this.handleTouchEnd : null}
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
                onTouchStart={showSlider ? this.handleTouchStart : null}
                onTouchMove={showSlider ? this.handleTouchMove : null}
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
              onTouchEnd={showSlider ? this.handleTouchEnd : null}
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
                onTouchStart={showSlider ? this.handleTouchStart : null}
                onTouchMove={showSlider ? this.handleTouchMove : null}
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
              onTouchEnd={showSlider ? this.handleTouchEnd : null}
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
                onTouchStart={showSlider ? this.handleTouchStart : null}
                onTouchMove={showSlider ? this.handleTouchMove : null}
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
