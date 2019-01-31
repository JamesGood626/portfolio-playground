import React, { Component } from "react";
import styled from "styled-components";
import tiles from "../Config";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(30, 1fr);
  width: auto;
  height: auto;
  overflow-x: auto;
  overflow-y: auto;
  user-select: none;
`;

const BoxOne = styled.div`
  width: 280px;
  height: 300px;
  background: blue;
`;

const BoxTwo = styled.div`
  width: 200px;
  height: 300px;
  background: lime;
`;

const BoxThree = styled.div`
  width: 220px;
  height: 280px;
  background: red;
`;

const BoxFour = styled.div`
  width: 240px;
  height: 260px;
  background: purple;
`;

// Could just set a flag on the image config to check for which size to render
// or keep this implementation either works.
const renderTiles = arr => {
  return arr.map((tile, i) => {
    i += 1;
    if (i % 4 === 0) {
      return renderBox(BoxFour, tile);
    }
    if (i % 3 === 0) {
      return renderBox(BoxThree, tile);
    }
    if (i % 2 === 0) {
      return renderBox(BoxTwo, tile);
    }
    if (i % 1 === 0) {
      return renderBox(BoxOne, tile);
    }
  });
};

const renderBox = (Box, tile) => (
  <Box>
    <h1>{tile.title}</h1>
    <p>{tile.text}</p>
  </Box>
);

class ImageGrid extends Component {
  state = {
    mouseDown: false
  };

  handleMouseDown = e => {
    console.log("mouse down");
    this.toggleMouseDown();
  };

  handleMouseUp = e => {
    console.log("mouse up");
    this.toggleMouseDown();
  };

  // Where the magic will happen
  handleMouseMove = e => {
    const { mouseDown } = this.state;
    if (mouseDown) {
      console.log("MOUSE MOVIN");
    }
    // if mouseDown boolean flag is set.
    // do the logic to scroll x and y
    // using scrollTo -> is there an x y version for this?
    // ****
    // Else if mouseUp has untoggled the mouseDown boolean flag.
    // don't do anything.
  };

  toggleMouseDown = () => {
    console.log("togglin");
    this.setState((state, props) => ({
      mouseDown: !state.mouseDown
    }));
  };

  render() {
    return (
      <Container
        onMouseDown={this.handleMouseDown}
        onMouseUp={this.handleMouseUp}
        onMouseMove={this.handleMouseMove}
      >
        {renderTiles(tiles)}
      </Container>
    );
  }
}

export default ImageGrid;
