import React, { Component } from "react";
import styled from "styled-components";
import { Menu } from "../Components/menu";
import { HeaderBackground } from "../Components/headerBackground";
import { HeaderContent } from "../Components/headerContent";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100vw;
  background: #e8e1ef;
`;

class Header extends Component {
  render() {
    return (
      <StyledHeader role="banner">
        <Menu />
        <HeaderBackground>
          <HeaderContent />
        </HeaderBackground>
      </StyledHeader>
    );
  }
}

export default Header;

// This was inbetween the nav tags.
// Look into the aria-controls and aria-expanded

/* <button
  class="menu-toggle"
  aria-controls="primary-menu"
  aria-expanded="false"
/>; */
