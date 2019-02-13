import React from "react";
import styled from "styled-components";
import Nav from "./Components/nav";
import Sidebar from "./Components/sidebar";
import Content from "./Components/content";
import Labels from "./Components/labels";

const MainGrid = styled.main`
  display: grid;
  width: 100vw;
  height: 100vh;
`;

export default function index() {
  return (
    <MainGrid>
      <Nav />
      <Sidebar />
      <Content />
      <Labels />
    </MainGrid>
  );
}
