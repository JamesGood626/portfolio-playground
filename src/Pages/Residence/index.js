import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Nav from "./Components/nav";
import Sidebar from "./Components/sidebar";
import Content from "./Components/content";

const theme = {
  mainFont: "Roboto, sans-serif",
  secondaryFont: "questa-grande, serif",
  headerFont: "Nunito, sans-serif",
  mainBgColor: "#F2F4F4",
  primaryColor: "#04F06A",
  textColor: "#04F06A",
  primaryWhite: "#fff",
  primaryBlack: "#222",
  primaryGrey: "#F2F4F4"
};

const MainGrid = styled.main`
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

const setBodyOverflow = type => {
  document.body.style.overflow = type;
};

export default class index extends Component {
  componentDidMount = () => {
    setBodyOverflow("hidden");
  };

  componentWillUnmount = () => {
    setBodyOverflow("auto");
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <MainGrid>
          <Nav />
          <Sidebar />
          <Content />
        </MainGrid>
      </ThemeProvider>
    );
  }
}
