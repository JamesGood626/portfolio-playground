import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Transition, TransitionGroup } from "react-transition-group";
import { TweenMax } from "gsap";
import { CTAButton } from "./CTAButton";
import { FlexColJCAICenterDiv } from "../../../LayoutStyledComponents";

// Gonna have to do a series of media queries to get the appropriate height for the container...
const Container = FlexColJCAICenterDiv.extend`
  position: relative;
  width: 90%;
  height: 34rem;
  background: #fcfcfc;

  @media (min-width: 345px) {
    height: 31.5rem;
  }

  @media (min-width: 405px) {
    height: 28.5rem;
  }

  @media (min-width: 445px) {
    height: 27rem;
  }

  @media (min-width: 530px) {
    height: 25rem;
  }

  @media (min-width: 600px) {
    height: 22rem;
  }

  @media (min-width: 640px) {
    width: 80%;
    height: 82%;
  }
`;

const HeaderText = styled.h2`
  color: #84ceeb;
  margin-bottom: 2vh;
  margin-top: 4vh;
  line-height: ${props => props.theme.headerLineHeight};
  letter-spacing: ${props => props.theme.headerLetterSpacing};
  text-align: center;
  font-size: ${props => props.theme.serviceHeaderFontSize};
  font-family: ${props => props.theme.mainFont};

  @media (min-width: 752px) {
    margin-top: 0;
    font-size: ${props => props.theme.serviceHeaderFontSize752W};
  }
`;

const DescriptionText = styled.p`
  color: #999;
  font-size: 1.2rem;
  line-height: ${props => props.theme.paraLineHeight};
  letter-spacing: ${props => props.theme.paraLetterSpacing};
  text-align: center;
  font-size: ${props => props.theme.paraFontSize};
  font-family: ${props => props.theme.mainFont};

  @media (min-width: 752px) {
    width: 100%;
    font-size: ${props => props.theme.paraFontSize752W};
  }

  @media (min-width: 950px) {
    width: 76%;
  }
`;

const AbsoluteDiv = FlexColJCAICenterDiv.extend`
  position: absolute;
  top: 0;
  left: 0;

  @media (min-width: 752px) {
    top: 10%;
  }
`;

// This definitely needs a unit test
// And now, I'm thinking of adding additional logic to determine the children of
// the fragment. Will definitely split that out into a separate function, AND test this
// component before adding that extra stuff.
// For taking into account the Getting a Quote feature, I'll add that state to the
// ServicesSlider Container and pass it in here:
// If it's null I'll just render the headerText and DescText
// If it contains a string for which service to provide a quote for, then
// It'll render the form specific to that, and a config obj and function will be
// passed down to deal with that logic, and make it look like it's dynamic.
const renderDescriptionText = (selectedService, serviceOptionsConfig) => {
  return Object.getOwnPropertyNames(serviceOptionsConfig).reduce(
    (acc, curr) => {
      const serviceOptionText = serviceOptionsConfig[curr].serviceOptionText;
      if (selectedService === serviceOptionText) {
        const headerText = serviceOptionsConfig[curr].descriptionHeader;
        const paraText = serviceOptionsConfig[curr].descriptionPara;
        acc.push(
          <Fragment key={serviceOptionText}>
            <HeaderText data-testid="services-header-text">
              {headerText}
            </HeaderText>
            <DescriptionText data-testid="services-description-text">
              {paraText}
            </DescriptionText>
          </Fragment>
        );
      }
      return acc;
    },
    []
  );
};

export default class ServicesDescription extends Component {
  enterTransition = async node => {
    TweenMax.fromTo(node, 0.5, { x: 100, opacity: 0 }, { x: 0, opacity: 1 });
  };

  exitTransition = node => {
    TweenMax.fromTo(node, 0.3, { x: 0, opacity: 1 }, { x: -100, opacity: 0 });
  };

  render() {
    const {
      selectedService,
      //quoteRequests,
      serviceOptionsConfig,
      updateQuoteRequested
    } = this.props;
    return (
      <Container>
        <TransitionGroup>
          <Transition
            in={this.props.in}
            key={selectedService}
            timeout={500}
            mountOnEnter={true}
            unmountOnExit={true}
            onEnter={this.enterTransition}
            onExit={this.exitTransition}
          >
            <AbsoluteDiv>
              {renderDescriptionText(selectedService, serviceOptionsConfig)[0]}
            </AbsoluteDiv>
          </Transition>
        </TransitionGroup>
        <CTAButton
          addMargin={true}
          posAbsolute={true}
          onClick={updateQuoteRequested}
        >
          Get Quote
        </CTAButton>
      </Container>
    );
  }
}
