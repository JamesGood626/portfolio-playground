import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  bottom: 0;
  left: 8.5rem;
  display: flex;
  align-items: flex-end;

  #gallery-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 16rem;
    height: 4.2rem;
    background: yellow;
  }

  #progress-container {
    width: 18rem;
    height: 6.5rem;
    background: #222;
  }

  #progress-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 3rem;
    color: #fff;
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .progress-line {
    width: 7.5rem;
    height: 0.2rem;
    background: #fff;
  }
`;

export default function labels() {
  return (
    <Container>
      <div id="gallery-container">
        <h3>GALLERY</h3>
      </div>
      <div id="progress-container">
        <h3>02</h3>
        <div className="progress-line" />
      </div>
    </Container>
  );
}
