import React from "react";
import styled from "styled-components";

const GridContainer = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-content: center;
  grid-template-columns: repeat(5, minmax(6rem, 20vmin));
  grid-template-rows: repeat(5, minmax(6rem, 20vmin));
  background-color: #34e;

  .item1 {
    background-color: #1abc9c;
    grid-row: 1 / 3;
    grid-column: 1 / 3;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/429997/cssgrid.png);
    background-size: 75%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .item2 {
    background-color: #3498db;
    grid-row: 4;
  }

  .item4 {
    background-color: #bdc3c7;
    grid-column: 3/ 4;
    grid-row: 3 / 4;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/429997/Twitter_Logo_White_On_Blue_copy.svg);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .item5 {
    background-color: #2ecc71;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/429997/GitHub-Mark.svg);
    background-repeat: no-repeat;
    grid-column: 5 / 6;
    grid-row: 3 / 4;
    background-size: 50%;
    background-position: center;
  }

  .item6 {
    background-color: #16a085;
    grid-column: 4 / 5;
    background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/429997/facebook.svg);
    background-size: 50%;
    background-repeat: no-repeat;
    background-position: center;
  }

  .item7 {
    /*background-color: green; */
    grid-column: 3;
    grid-row: 5 / 6;
  }

  [class^="item"] {
    background-color: rgba(250, 250, 250, 0.4);
    border: 1px transparent solid;
    mix-blend-mode: screen;
  }

  [class^="item"]:hover {
    background-color: rgba(250, 250, 250, 0.6);
    border: 1px white solid;
  }
`;

export default function vminmaxExample() {
  return (
    <GridContainer class="gridcontainer">
      <div class="item1" />
      <div class="item2" />

      <a class="item4" href="https://github.com/Ollie-w/gridStarter">
        <div />
      </a>
      <a class="item5" href="https://github.com/Ollie-w">
        <div />
      </a>
      <div class="item6" />
      <div class="item7" />
    </GridContainer>
  );
}
