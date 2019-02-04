import React from "react";
import styled from "styled-components";
import search from "../assets/search.svg";
import cart from "../assets/cart_icon.svg";

const Header = styled.header`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 85vw;
  margin-top: 2rem;

  &:after {
    content: "";
    position: absolute;
    bottom: -10px;
    width: 100%;
    height: 1px;
    background: #3f3f3f;
  }

  h1 {
    letter-spacing: 0.5rem;
    color: #ffffff;
    font-weight: 200;
  }

  @media screen and (max-width: 600px) {
    h1 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 800px) {
    h1 {
      font-size: 1.4rem;
    }
  }
`;

export default function header() {
  return (
    <Header>
      <img src={search} />
      <h1>VASS SHOES</h1>
      <img id="cart-icon" src={cart} />
    </Header>
  );
}
