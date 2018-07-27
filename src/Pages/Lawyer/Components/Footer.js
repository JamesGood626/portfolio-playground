import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 40vh;
  width: 100vw;
  background: maroon;
`;
export const Footer = () => {
  return (
    <StyledFooter>
      <h3>Look ma' I'm a Footer</h3>
    </StyledFooter>
  );
};
