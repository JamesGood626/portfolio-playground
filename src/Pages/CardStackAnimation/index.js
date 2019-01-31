import React from "react";
import styled from "styled-components";
import CardStackAnimator from "./Containers/CardStackAnimator";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: #024;
`;

const index = () => {
  return (
    <Main>
      <CardStackAnimator />
    </Main>
  );
};

export default index;
