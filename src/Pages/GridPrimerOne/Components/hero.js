import React from "react";
import styled from "styled-components";

const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-areas:
    ". . . . . imgGrid imgGrid imgGrid imgGrid imgGrid imgGrid imgGrid"
    "header header header header header imgGrid imgGrid imgGrid imgGrid imgGrid imgGrid imgGrid"
    ". . . . . imgGrid imgGrid imgGrid imgGrid imgGrid imgGrid imgGrid";
  width: 100%;
  height: 100%;
  // padding compensates for position: absolute navbar
  // and emulates the inspiration design
  padding-top: 4rem;

  h1 {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    grid-area: header;
    height: 8rem;
    font-size: 2.4rem;
    font-family: sans serif;

    #emphasized-header-text {
      font-size: 5rem;
    }
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(9, 1fr);
  grid-template-rows: repeat(10, 1fr);
  grid-area: imgGrid;
  height: 100%;
  background: lime;
  .img {
    background: blue;
  }

  .long-large {
    width: 20rem;
    height: 10rem;
    background: red;
  }
`;

export default function hero() {
  return (
    <Grid>
      <h1>
        We are creative<span id="emphasized-header-text">Photographers</span>
      </h1>
      {/* Still need to put the toggle here */}
      <ImageGrid>
        <div id="img-one">1</div>
        <div id="img-two">2</div>
        <div id="img-three">3</div>
        <div id="img-four">4</div>
        <div id="img-five">5</div>
        <div id="img-six">6</div>
        <div id="img-seven">7</div>
      </ImageGrid>
    </Grid>
  );
}

// classes in div order
// class="img rounded short-short-medium"
// class="img rounded tall"
// class="img rounded short-medium"
// class="img rounded short-medium long-small"
// class="img rounded long-large"
// class="img short-small"
// class="img tall"
