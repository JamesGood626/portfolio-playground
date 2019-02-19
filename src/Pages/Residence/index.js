import React, { Component } from "react";
import styled from "styled-components";
import Nav from "./Components/nav";
import Sidebar from "./Components/sidebar";
import Content from "./Components/content";

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
      <MainGrid>
        <Nav />
        <Sidebar />
        <Content />
      </MainGrid>
    );
  }
}
