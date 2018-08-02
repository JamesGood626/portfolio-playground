import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: ${props => (props.sidebarMenu ? "flex" : "none")};
  flex-direction: ${props => (props.sidebarMenu ? "column" : "none")};
  justify-content: ${props => (props.sidebarMenu ? "space-between" : "none")};
  align-items: ${props => (props.sidebarMenu ? "center" : "none")};
  height: ${props => (props.sidebarMenu ? "40%" : null)};

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    margin-right: 0;
    color: #fcfcfc;
  }
`;

const Link = styled.a`
  font-size: ${props => props.theme.navLinkFontSize};
  font-family: ${props => props.theme.mainFont};
  @media (min-width: 900px) {
    margin-left: 4rem;
    font-size: ${props => props.theme.navLinkFontSize900W};
    text-decoration: none;
  }
  &:hover {
    color: ${props => props.theme.secondaryColor};
    cursor: pointer;
  }
`;

// in the component that manages the hamburger dropdown
// will pass true in for overlayStyle
// and meed to add styling for nav to appear as a sidebar
export const Menu = ({ sidebarMenu }) => {
  return (
    <Nav sidebarMenu={sidebarMenu}>
      <span className="nav-link">
        <Link className="active-link">Home</Link>
      </span>
      <span className="nav-link">
        <Link>About</Link>
      </span>
      <span className="nav-link">
        <Link>Work</Link>
      </span>
      <span className="nav-link">
        <Link>Contact</Link>
      </span>
    </Nav>
  );
};
