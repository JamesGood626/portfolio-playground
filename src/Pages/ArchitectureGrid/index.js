import React from "react";
import styled from "styled-components";
import TopbarFrivolties from "./Components/topbarFrivolties.js";
import Grid from "./Components/grid.js";
import GridTwo from "./Components/gridTwo.js";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100vw;
  height: 100vh;
`;

const index = () => {
  return (
    <Main>
      <TopbarFrivolties />
      <GridTwo />
    </Main>
  );
};

export default index;

// The inspiration link: https://www.pinterest.com/pin/343399540333472193/
