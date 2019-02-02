import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Transition, TransitionGroup } from "react-transition-group";
import { TweenMax, TimelineMax } from "gsap";
import { Menu } from "./menu";
import Sidebar from "./Sidebar";

const Div = styled.div`
  height: 4rem;
  width: 4rem;
  position: absolute;
  z-index: 20;
  right: 0;

  @media (min-width: 900px) {
    display: none;
  }
`;

const SvgContainerDiv = styled.div`
  height: 3rem;
  width: 3rem;
`;

// For getting the menu to center upon animating sidebar in
// I thought about possibly adjusting the width of the navbar container
// which contains the logo and the svg in order to preserve it's position
// across screen resize.
export default class Hamburguesa extends Component {
  state = {
    showSidebar: false,
    nodeRef: null,
    tl: null
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateScreenSize);
    TweenMax.set(this.hamberguesaTopLine, { transformOrigin: "center" });
    TweenMax.set(this.hamberguesaBottomLine, { transformOrigin: "center" });
    this.tl = new TimelineMax();
    this.tl.add("startTween");
    this.tl.to(".hamberguesa", 0.5, { fill: "#84ceeb" });
    this.tl.to(this.hamberguesaMidLine, 0.3, { opacity: 0 }, "startTween");
    this.tl.to(
      this.hamberguesaTopLine,
      0.5,
      {
        y: 8,
        rotation: 45
      },
      "startTween"
    );
    this.tl.to(
      this.hamberguesaBottomLine,
      0.5,
      {
        y: -6,
        rotation: -45
      },
      "startTween"
    );
    this.tl.add("finishTween");
    this.tl.to(".hamberguesa", 0.3, { fill: "#fcfcfc" }, "finishTween");
    this.tl.to(".hamberguesa-mid-line", 0.3, { opacity: 1 }, "finishTween");
    this.tl.to(
      ".hamberguesa-top-line",
      0.5,
      { y: 0, rotation: 0 },
      "finishTween"
    );
    this.tl.to(
      ".hamberguesa-bottom-line",
      0.5,
      { y: 0, rotation: 0 },
      "finishTween"
    );
    this.tl.addPause(0.5);

    this.tl.pause();
    // this.setState({
    //   tl: tl
    // });
  };

  componentWillUnmount = () => {
    window.removeEventListener("resize", this.updateScreenSize);
  };

  animateSidebarIn = node => {
    TweenMax.fromTo(node, 0.5, { x: 400 }, { x: 0 });
  };

  animateSidebarOut = node => {
    TweenMax.fromTo(node, 0.5, { x: 0 }, { x: 400 });
  };
  // Throttle?
  updateScreenSize = e => {
    if (e.target.innerWidth > 900) {
      this.setState({
        showSidebar: false
      });
    }
  };

  toggleSidebar = e => {
    if (!this.state.showSidebar) {
      this.tl.time(0);
      this.tl.play();
    } else {
      this.tl.play();
    }

    this.setState((state, props) => ({
      showSidebar: !state.showSidebar
    }));
  };

  render() {
    const { showSidebar } = this.state;
    return (
      <Fragment>
        <Div onClick={this.toggleSidebar}>
          <SvgContainerDiv>
            <svg
              id="Layer_1"
              className="svgBurger"
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 42 42"
              ref={x => (this.hamberguesaSvg = x)}
            >
              <path
                className="hamberguesa hamberguesa-circle"
                d="M125,92a19,19,0,1,1-19,19,19,19,0,0,1,19-19m0-2a21,21,0,1,0,21,21,21,21,0,0,0-21-21Z"
                transform="translate(-104 -90)"
              />
              <rect
                className="hamberguesa hamberguesa-top-line"
                x="8"
                y="12"
                width="26"
                height="3"
                rx="2"
                ry="2"
                ref={x => (this.hamberguesaTopLine = x)}
              />
              <rect
                className="hamberguesa hamberguesa-mid-line"
                x="8"
                y="19"
                width="26"
                height="3"
                rx="2"
                ry="2"
                ref={x => (this.hamberguesaMidLine = x)}
              />
              <rect
                className="hamberguesa hamberguesa-bottom-line"
                x="8"
                y="26"
                width="26"
                height="3"
                rx="2"
                ry="2"
                ref={x => (this.hamberguesaBottomLine = x)}
              />
            </svg>
          </SvgContainerDiv>
        </Div>
        <TransitionGroup>
          {showSidebar ? (
            <Transition
              in={this.showSidebar}
              timeout={300}
              mountOnEnter={true}
              unmountOnExit={false}
              onEnter={this.animateSidebarIn}
              onExit={this.animateSidebarOut}
            >
              <Sidebar key={1}>
                <Menu sidebarMenu={true} />
              </Sidebar>
            </Transition>
          ) : (
            <Menu key={2} />
          )}
        </TransitionGroup>
      </Fragment>
    );
  }
}
