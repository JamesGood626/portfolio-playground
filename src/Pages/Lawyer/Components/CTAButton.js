import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  width: 250px;
  font-size: 1.4rem;
  color: #ff312e;
  background: transparent;
  border: 2px solid #ff312e;
`;

export const CTAButton = ({ children, onClick }) => {
  return <Button onClick={onClick}>{children}</Button>;
};
