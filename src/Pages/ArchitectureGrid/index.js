import React from "react";
import styled from "styled-components";
import linesquare from "./assets/line_square.svg";
import architecture from "./assets/architecture_w800px.png";
import architectureTwo from "./assets/architecture2_w500px.png";
import architectureThree from "./assets/architecture3_w560px.png";

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;

  img {
    height: auto;
    object-fit: cover;
  }

  #linesquare {
    width: 340px;
  }

  #architecture {
    width: 340px;
  }

  #architecture-two {
    width: 340px;
  }

  #architecture-three {
    width: 340px;
  }

  .clip-img {
    height: 170px;
    width: 150px;
    overflow: hidden;
    background: blue;
  }
`;

const index = () => {
  return (
    <Main>
      <h1>Architecture Grid</h1>
      <div>
        <img id="linesquare" src={linesquare} />
      </div>
      <div>
        <img id="architecture" src={architecture} />
      </div>
      <div class="clip-img">
        <img id="architecture-two" src={architectureTwo} />
      </div>
      <div class="clip-img">
        <img id="architecture-three" src={architectureThree} />
      </div>
    </Main>
  );
};

export default index;

// The inspiration link: https://www.pinterest.com/pin/343399540333472193/
