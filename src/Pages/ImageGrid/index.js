import React from "react";
import styled from "styled-components";
import ImageGrid from "./Containers/ImageGrid";

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  width: auto;
  height: auto;
  background: #fff;
  overflow-x: auto;
  overflow-y: auto;
`;

const index = () => {
  return (
    <Main>
      <ImageGrid />
    </Main>
  );
};

export default index;
