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
    box-shadow: inset 0 3.125rem 0 0 ${props => props.theme.primaryColor};
    color: #f2f2f2;
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 600px) {
    font-size: ${props => props.theme.buttonFontSize600W};
  }
`;

export const CTAButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
