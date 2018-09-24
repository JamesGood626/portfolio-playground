import React from "react";
import styled from "styled-components";
import "../main.css";

const NavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  position: absolute;
  z-index: 30;
  top: 0;
  height: 6rem;
  width: 90vw;
`;

const SvgContainer = styled.div`
  position: absolute;
  top: 26%;
  height: 5rem;
  width: 5rem;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - 1.5px);
    left: -40vw;
    height: 3px;
    width: 40vw;
    background: ${props => props.theme.whiteColor};
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: calc(50% - 1.5px);
    left: 5rem;
    height: 3px;
    width: 40vw;
    background: ${props => props.theme.whiteColor};
  }
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80%;
  font-family: ${props => props.theme.secondaryFont};

  @media (min-width: 600px) {
    justify-content: space-around;
  }

  & > span:hover {
  }
`;

const Link = styled.a`
  font-size: ${props => props.theme.navLinkFontSize};
  color: #fcfcfc;
  text-decoration: none;

  @media (min-width: 600px) {
    font-size: ${props => props.theme.navLinkFontSize600W};
  }
`;

export const Menu = () => {
  return (
    <NavContainer>
      <SvgContainer>
        <svg
          id="Layer_1"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 41.01 41.01"
        >
          <path
            className="h-logo-1"
            d="M128 108.91L147.09 128 128 147.09 108.91 128 128 108.91m0-1.42L107.49 128 128 148.51 148.51 128 128 107.49z"
            transform="translate(-107.49 -107.49)"
          />
          <text className="h-logo-1" transform="translate(10.86 29.43)">
            H
          </text>
        </svg>
      </SvgContainer>
      <Nav>
        <span id="about-link" class="nav-link">
          <Link>About</Link>
        </span>
        <span id="services-link" class="nav-link">
          <Link>Services</Link>
        </span>
        <span id="clients-link" class="nav-link">
          <Link>Clients</Link>
        </span>
        <span id="contact-link" class="nav-link">
          <Link>Contact</Link>
        </span>
      </Nav>
    </NavContainer>
  );
};
