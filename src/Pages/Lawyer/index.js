import React from "react";
import { ThemeProvider } from "styled-components";
import { Main } from "./Main";

const theme = {
  mainFont: "balboa-plus-fill, sans-serif",
  secondaryFont: "questa-grande, serif",
  primaryColor: "#6F0B0B",
  blackColor: "#292929",
  whiteColor: "#F2F2F2",
  navLinkFontSize: "0.8rem",
  navLinkFontSize600W: "1.2rem",
  buttonFontSize: "1rem",
  buttonFontSize600W: "1.4rem",
  headerFontSize: "1.6rem",
  headerFontSize500W: "2rem",
  headerFontSize768W: "3rem",
  headerFontSize1024W: "5rem",
  //serviceDropDownFontSize: "1.4rem",
  //serviceDropDownFontSize600W: "1.8rem",
  //serviceHeaderFontSize: "1.8rem",
  //serviceHeaderFontSize752W: "2.4rem",
  //testimonialHeaderFontSize752W: "2.4rem",
  //testimonialHeaderFontSize: "1.8rem",
  //testimonialCircleHeaderFontSize752W: "1.8rem",
  //testimonialCircleHeaderFontSize: "1.4rem",
  paraFontSize: "1rem",
  paraFontSize752W: "1.2rem",
  headerLineHeight: "2.4rem",
  headerLetterSpacing: "0.2rem",
  paraLineHeight: "1.8rem",
  paraLetterSpacing: "0.1rem"
};

// What are the trade offs of using this index.js LawyerPage as a functional component
// instead of a stateful one that would manage the page scroll and trigger animations
// versus letting each section monitor that on their own. Ehh... I need to refactor. The latter
// sounds bad.

// TODO:
// Font sizes using style components theming
// Header image...
// Fix blog post card section
// Create the slider animation for testimonials
// SVG's and images
// minimal animations on scroll
export const LawyerPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
};
