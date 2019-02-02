import React from "react";
import styled from "styled-components";
import Navbar from "./Containers/navbar";
import Hero from "./Components/hero";

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const index = () => {
  return (
    <Main>
      <Navbar />
      <Hero />
    </Main>
  );
};

export default index;

// The inspiration link: https://www.sketchappsources.com/resource/download-3683.html
