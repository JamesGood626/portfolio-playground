import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Transition, TransitionGroup } from "react-transition-group";
import { TweenMax } from "gsap";
import { Menu } from "./Menu";
import Sidebar from "./Sidebar";

const Div = styled.div`
  height: 4rem;
  width: 4rem;
  position: absolute;
  z-index: 20;
  right: 0;
  background: papayawhip;

  @media (min-width: 900px) {
    display: none;
  }
`;

export default class Hamburguesa extends Component {
  state = {
    showSidebar: false,
    nodeRef: null
  };

  componentDidMount = () => {
    window.addEventListener("resize", this.updateScreenSize);
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
  // It'll do for now, but see if there's any potential perf downsides
  updateScreenSize = e => {
    if (e.target.innerWidth > 900) {
      this.setState((prevState, state) => ({
        showSidebar: false
      }));
    }
  };

  toggleSidebar = e => {
    this.setState((prevState, state) => ({
      showSidebar: !prevState.showSidebar
    }));
  };

  render() {
    const noMargin = {
      margin: "0"
    };
    const { showSidebar } = this.state;
    return (
      <Fragment>
        <Div onClick={this.toggleSidebar}>---</Div>
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
