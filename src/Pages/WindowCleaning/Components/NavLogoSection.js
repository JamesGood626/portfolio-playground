import React from "react";
import styled from "styled-components";
import { Logo } from "./Logo";
// import { Menu } from "./Menu";
import Hamburguesa from "./Hamburguesa";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 10;
  top: 0;
  height: 8rem;
  width: 90vw;
  //background: blue;
`;

export const NavLogoSection = () => {
  return (
    <NavContainer>
      <Logo />
      <Hamburguesa />
    </NavContainer>
  );
};
