import React from "react";
import styled from "styled-components";
import Header from "./Components/header";
import ProductDisplay from "./Components/productDisplay";
import ProductOptions from "./Components/productOptions";

const FauxBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;
  margin: 0;
  padding: 0;
  background: linear-gradient(#0a0a0a, #202020);
  font-family: "Roboto", sans-serif;
`;

const Container = styled.div`
  width: 85vw;
  height: 100vh;

  main {
    width: 85vw;
  }

  /**
   *
   *
   * Large Phone Media Queries
   *
   *
   **/
  @media screen and (max-width: 960px) {
    height: 100%;

    #page-container {
      height: auto;
    }
  }
`;

export default function index() {
  return (
    <FauxBody>
      <Container>
        <Header />
        <main>
          <ProductDisplay />
          <ProductOptions />
        </main>
      </Container>
    </FauxBody>
  );
}
