import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import Navbar from "./Components/navbar";
import Heading from "./Components/heading";
import RocketSection from "./Components/rocket-section";

const theme = {
  mainFont: "balboa-plus-fill, sans-serif",
  secondaryFont: "questa-grande, serif",
  headerFont: "Nunito, sans-serif",
  mainBgColor: "linear-gradient(#171923, #1a1f33)",
  secondaryBgColor: "#191f2e",
  primaryColor: "#44dfab",
  primaryGrey: "#9092a7",
  primaryWhite: "#ffffff",
  sectionMargin: "2rem"
};

const FauxBody = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.mainBgColor};
`;

const Container = styled.main`
  margin: 0;
  padding: 0;
  width: 85vw;
  height: 100%;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  margin-top: 2.6rem;
`;

export default function index() {
  return (
    <ThemeProvider theme={theme}>
      <FauxBody>
        <Container>
          <Navbar />
          <Main>
            <Heading />
            <RocketSection />
          </Main>
        </Container>
      </FauxBody>
    </ThemeProvider>
  );
}

// Resource obtained from:
// https://www.sketchappsources.com/free-source/3740-eth-cryptocurrency-page-sketch-freebie-resource.html
