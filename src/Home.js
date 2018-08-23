import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(120deg, #2978a0, #87f6ff) fixed;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 80vh;
  font-family: Courgette;

  & > a {
    margin: 1rem 0;
    text-decoration: none;

    & > h1 {
      position: relative;
      background-image: -webkit-linear-gradient(120deg, #2978a0, #87f6ff);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-size: 1.6rem;

      @media (min-width: 712px) {
        font-size: 4rem;
      }

      &:after {
        background: none;
        content: attr(data-text);
        left: 0;
        position: absolute;
        text-shadow: 2px 3px 4px rgba(180, 40, 40, 0.33);
        top: 0;
        z-index: -1;
      }
    }
  }
`;

// const H1 = styled.h1`
//   position: relative;
//   background-image: -webkit-linear-gradient(120deg, #2978a0, #87f6ff);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
//   font-size: 1.6rem;

//   @media (min-width: 500px) {
//     font-size: 4rem;
//   }

//   &:after {
//     background: none;
//     content: ${props => `${props.dataText}`};
//     left: 0;
//     position: absolute;
//     text-shadow: 2px 3px 4px rgba(180, 40, 40, 0.33);
//     top: 0;
//     z-index: -1;
//   }
// `;

export const Home = () => {
  return (
    <Container>
      <Nav>
        <Link to="/lawyer">
          <h1 data-text="Lawyer Page">Lawyer Page</h1>
        </Link>
        <Link to="/windowcleaning">
          <h1 data-text="Window Cleaning Page">Window Cleaning Page</h1>
        </Link>
        <Link to="/runascroll">
          <h1 data-text="Runa Scroll">Runa Scroll</h1>
        </Link>
      </Nav>
    </Container>
  );
};
