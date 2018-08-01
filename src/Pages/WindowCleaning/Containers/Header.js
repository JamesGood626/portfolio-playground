import React, { Component } from "react";
import styled from "styled-components";
import { NavLogoSection } from "../Components/NavLogoSection";
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
        <NavLogoSection />
        <HeaderBackground>
          <HeaderContent />
        </HeaderBackground>
      </StyledHeader>
    );
  }
}

export default Header;
