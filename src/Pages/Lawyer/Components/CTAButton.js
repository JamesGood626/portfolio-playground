import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 3.2rem;
  width: 12rem;
  background: #5ab9ea;
  border: none;
  border-radius: 25rem;
  color: ${props => props.theme.main};
  font-size: 1.2rem;
`;

export const CTAButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
