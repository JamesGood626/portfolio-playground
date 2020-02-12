import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: auto;
  margin-top: 4rem;
  margin-bottom: 4rem;
  /* background: linear-gradient(120deg, #2978a0, #87f6ff) fixed; */
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90vw;
  height: 80%;
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
      padding-left: 0.4rem;
      padding-right: 0.4rem;

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

const destinationsArr = [
  { linkTo: "/lawyer", title: "Lawyer Page" },
  { linkTo: "/windowcleaning", title: "Window Cleaning Page" },
  { linkTo: "/runascroll", title: "Runa Scroll" },
  { linkTo: "/fruitscroll", title: "Fruit Scroll" },
  { linkTo: "/budapest-shoe", title: "Budapest Shoe" },
  { linkTo: "/architecture-grid", title: "Architecture Grid" },
  { linkTo: "/residence", title: "Residence" },
  { linkTo: "/ethereum-classic", title: "Ethereum Classic" }
  // { linkTo: "/grid-exp", title: "Grid Experimentation" }
  // { linkTo: "/grid-primer-one", title: "Grid Primer One" },
  // { linkTo: "/card-stack-animation", title: "Card Stack Animation" },
  // { linkTo: "/image-grid", title: "Image Grid" },
];

const renderLinks = destinations =>
  destinations.map(dest => {
    return (
      <Link to={dest.linkTo}>
        <h1 data-text={dest.title}>{dest.title}</h1>
      </Link>
    );
  });

export const Home = () => {
  return (
    <Container>
      <Nav>{renderLinks(destinationsArr)}</Nav>
    </Container>
  );
};
