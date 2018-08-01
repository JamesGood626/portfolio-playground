import React from "react";
import styled, { keyframes } from "styled-components";

// Button is smushed at about 450-550px range
const leftStripAnimation = keyframes`
  0% {
    transform: translate(0px) rotate(150deg)
  }
  40% {
    transform: translate(300px) rotate(150deg)
  }
  60% {
    transform: translate(0px) rotate(150deg)
  }
  100% {
    transform: translate(300px) rotate(150deg)
  }
`;

const rightStripAnimation = keyframes`
  0% {
    transform: translate(0px) rotate(150deg)
  }
  40% {
    transform: translate(300px) rotate(150deg)
  }
  60% {
    transform: translate(0px) rotate(150deg)
  }
  100% {
    transform: translate(300px) rotate(150deg)
  }
`;

const Button = styled.button`
  position: relative;
  z-index: 5;
  height: 3.2rem;
  width: 12rem;
  background: #5ab9ea;
  border: none;
  border-radius: 25rem;
  // position relative messes with the spacing up top
  margin-top: -1.2rem;
  color: #fcfcfc;
  font-size: ${props => props.theme.paraFontSize};
  font-family: ${props => props.theme.mainFont};
  margin-top: ${props => (props.addMargin ? `4vh` : null)};
  margin-bottom: ${props => (props.addMargin ? `4vh` : null)};
  position: ${props => (props.posAbsolute ? `absolute` : null)};
  bottom: -1%;
  bottom: ${props => (props.keepBottom ? "10%" : null)};
  overflow: hidden;

  @media (min-width: 670px) {
    margin-bottom: 0;
    bottom: 10%;
    margin-top: ${props => (props.addMarginTop ? "1.2rem" : null)};
  }

  &:focus {
    outline: none;
  }

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -30%;
    left: -35%;
    height: 8rem;
    width: 1rem;
    background: #fcfcfc;
    transform: rotate(150deg);
    opacity: 0.1;
    transition: transform 300ms ease-in-out;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -30%;
    right: 95%;
    height: 8rem;
    width: 1rem;
    background: #fcfcfc;
    opacity: 0.1;
    transform: rotate(150deg);
  }

  &:hover:before {
    animation: ${leftStripAnimation} 3s ease-in-out 0s infinite;
  }

  &:hover:after {
    animation: ${rightStripAnimation} 3s ease-in-out 0s infinite;
  }
`;

export const CTAButton = ({
  children,
  onClick,
  addMargin,
  addMarginTop,
  posAbsolute
}) => {
  return (
    <Button
      addMargin={addMargin}
      posAbsolute={posAbsolute}
      addMarginTop={addMarginTop}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
