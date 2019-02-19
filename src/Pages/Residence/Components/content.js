import React from "react";
import styled from "styled-components";
import Labels from "./labels";
import interiorDesign from "../assets/interior_design.jpg";

const Container = styled.div`
  position: relative;
  z-index: -50;
  display: flex;
  align-items: center;

  #interior-design-img-container {
    width: 62.5vw;
    height: 100vh;
  }

  #interior-design-img-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MainContent = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 37.5vw;
  padding-left: 5rem;
  padding-right: 5rem;

  h1 {
    font-size: 5rem;
    line-height: 6.5rem;
  }

  #main-content-text-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 1.4rem;
    height: 14rem;
  }

  #main-content-text-container p {
    font-size: 0.9rem;
    line-height: 1.8rem;
  }

  #main-content-text-container a {
    font-weight: bold;
    width: 6rem;
  }

  #plus-sign {
    vertical-align: text-bottom;
    font-weight: normal;
    font-size: 1.2rem;
  }
`;

export default function content() {
  return (
    <Container>
      <MainContent>
        <h1>Van Gend Residence</h1>
        <div id="main-content-text-container">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam
            facere ex voluptates eligendi aut provident voluptatum, rom numquam
            quit. Cumque, ducimus quo autem esso eveniet quisquam ham cupiditate
            voluptas sequil
          </p>
          <a>
            DETAILS <span id="plus-sign">+</span>
          </a>
        </div>
        <Labels />
      </MainContent>
      <div id="interior-design-img-container">
        <img src={interiorDesign} />
      </div>
    </Container>
  );
}
