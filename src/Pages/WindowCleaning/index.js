import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { Main } from "./Main";

const theme = {
  mainFont: "Quicksand, sans-serif",
  primaryColor: "#84ceeb",
  secondaryColor: "#8860D0",
  paraColor: "#999",
  navLinkFontSize: "1.8rem",
  navLinkFontSize900W: "1.2rem",
  headerFontSize: "2rem",
  headerFontSize500W: "3rem",
  headerFontSize768W: "4rem",
  headerFontSize1024W: "6rem",
  serviceDropDownFontSize: "1.4rem",
  serviceDropDownFontSize600W: "1.8rem",
  serviceHeaderFontSize: "1.8rem",
  serviceHeaderFontSize752W: "2.4rem",
  testimonialHeaderFontSize752W: "2.4rem",
  testimonialHeaderFontSize: "1.8rem",
  testimonialCircleHeaderFontSize752W: "1.8rem",
  testimonialCircleHeaderFontSize: "1.4rem",
  paraFontSize: "1rem",
  paraFontSize752W: "1.2rem",
  headerLineHeight: "2.4rem",
  headerLetterSpacing: "0.2rem",
  paraLineHeight: "1.8rem",
  paraLetterSpacing: "0.1rem"
};

const PageContainerDiv = styled.div`
  overflow-x: hidden;
`;

export const WindowCleaningPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <PageContainerDiv>
        <Main />
      </PageContainerDiv>
    </ThemeProvider>
  );
};
