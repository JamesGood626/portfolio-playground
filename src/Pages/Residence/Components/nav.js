import React from "react";
import styled from "styled-components";

const Nav = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 74%;
  height: 4.4rem;
  font-family: ${props => props.theme.mainFont};

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 9rem;
    height: 100%;
    background: ${props => props.theme.primaryBlack};
    color: #fff;
  }

  ul {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: 100%;
    background: ${props => props.theme.mainBgColor};
    list-style-type: none;
  }
`;

export default function nav() {
  return (
    <Nav>
      <div>STUDIO</div>
      <ul>
        <li id="collections">
          <span>C</span>
          <span>o</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>c</span>
          <span>t</span>
          <span>i</span>
          <span>o</span>
          <span>n</span>
          <span>s</span>
        </li>
        <li id="new">
          <span>N</span>
          <span>e</span>
          <span>w</span>
        </li>
        <li id="trending">
          <span>T</span>
          <span>r</span>
          <span>e</span>
          <span>n</span>
          <span>d</span>
          <span>i</span>
          <span>n</span>
          <span>g</span>
        </li>
        <li id="popular">
          <span>P</span>
          <span>o</span>
          <span>p</span>
          <span>u</span>
          <span>l</span>
          <span>a</span>
          <span>r</span>
        </li>
      </ul>
    </Nav>
  );
}
