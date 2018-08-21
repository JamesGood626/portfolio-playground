import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  width: 250px;
  margin-top: 4vh;
  align-self: center;
  font-family: ${props => props.theme.secondaryFont};
  font-size: ${props => props.theme.buttonFontSize};
  color: #333;
  background: transparent;
  border: 2px solid #333;
  box-shadow: inset 0 0 0 0 ${props => props.theme.primaryColor};
  transition: 0.2s ease-out;

  &:hover {
    box-shadow: inset 0 3.125rem 0 0 ${props => props.theme.primaryColor};
    color: ${props => props.theme.whiteColor};
    border-color: ${props =>
      props.changeBorderOnHover ? props.theme.primaryColor : null};
  }

  &:focus {
    outline: none;
  }

  @media (min-width: 600px) {
    font-size: ${props => props.theme.buttonFontSize600W};
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const SubmitButton = ({ children, changeBorderOnHover }) => {
  return (
    <Button type="submit" changeBorderOnHover={changeBorderOnHover}>
      {children}
    </Button>
  );
};
