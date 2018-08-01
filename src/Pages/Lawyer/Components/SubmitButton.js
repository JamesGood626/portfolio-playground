import React from "react";
import styled from "styled-components";

const Button = styled.button`
  height: 50px;
  width: 250px;
  margin-top: 4vh;
  align-self: center;
  font-size: 1.4rem;
  color: #333;
  background: transparent;
  border: 2px solid #333;

  @media (max-width: 420px) {
    width: 100%;
  }
`;

export const SubmitButton = ({ children }) => {
  return <Button type="submit">{children}</Button>;
};
