import React, { Component } from "react";
import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 8rem;
  padding-left: 3rem;

  #circle-logo {
    width: 3rem;
    height: 3rem;
    border-radius: 50px;
    background: #222;
  }

  #menu-items {
    display: flex;
    justify-content: space-between;
    width: 75%;
    list-style-type: none;
    font-size: 1.2rem;
  }

  #menu-items span {
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin-left: 5rem;
    font-size: 1.1rem;
  }
`;

export default class navbar extends Component {
  render() {
    return (
      <Nav>
        <div id="circle-logo" />
        <ul id="menu-items">
          <span>
            <li>Awards</li>
            <li>Shots</li>
            <li>Blog</li>
            <li>Who we are</li>
            <li>Find us</li>
          </span>
          <li>+91 994 963 6868</li>
        </ul>
      </Nav>
    );
  }
}
