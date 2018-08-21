import React from "react";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  z-index: 10;
  height: 50px;
  width: 250px;
  font-family: ${props => props.theme.secondaryFont};
  font-size: ${props => props.theme.buttonFontSize};
  color: ${props => props.theme.whiteColor};
  background: transparent;
  border: 2px solid ${props => props.theme.whiteColor};
  overflow: hidden;
  box-shadow: inset 0 0 0 0 ${props => props.theme.primaryColor};
  transition: 0.2s ease-out;

  &:hover {
    box-shadow: inset 0 3.125rem 0 0
      ${props =>
        props.alternateHoverColor
          ? props.theme.whiteColor
          : props.theme.primaryColor};
    color: ${props =>
      props.alternateHoverColor
        ? props.theme.primaryColor
        : props.theme.whiteColor};
    border-color: ${props =>
      props.changeBorderOnHover ? props.theme.primaryColor : null};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 600px) {
    font-size: ${props => props.theme.buttonFontSize600W};
  }
`;

export const CTAButton = ({
  children,
  onClick,
  alternateHoverColor,
  changeBorderOnHover
}) => {
  return (
    <Button
      alternateHoverColor={alternateHoverColor}
      changeBorderOnHover={changeBorderOnHover}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};
