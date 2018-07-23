import React from "react";
import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  z-index: 30;
  top: 0;
  height: 6rem;
  width: 90vw;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
`;

const Link = styled.a`
  margin-left: 4rem;
  font-size: 1rem;
  color: #fcfcfc;
  text-decoration: none;
`;

export const Menu = () => {
  return (
    <NavContainer>
      <div class="site-branding">Logo Here</div>
      <Nav>
        <span id="active-link" class="nav-link">
          <Link>Home</Link>
        </span>
        <span class="nav-link">
          <Link>About</Link>
        </span>
        <span class="nav-link">
          <Link>Work</Link>
        </span>
        <span class="nav-link">
          <Link>Contact</Link>
        </span>
      </Nav>
    </NavContainer>
  );
};
