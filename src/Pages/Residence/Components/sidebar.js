import React from "react";
import styled from "styled-components";

const Aside = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 6rem;
  background: #ddd;
  font-family: ${props => props.theme.mainFont};

  #hamburger {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 6rem;
  }

  #hamburger span {
    position: absolute;
    z-index: 20;
    height: 0.35rem;
    background: ${props => props.theme.primaryBlack};
  }

  /* There's some real wacky stuff going on with the width of these spans...... */
  /* Will swap out for proper svg later */
  #hamburger-line-one {
    top: 2rem;
    width: 2.6rem;
  }

  #hamburger-line-two {
    width: 2.8rem;
  }

  #hamburger-line-three {
    top: 3.6rem;
    width: 3.6rem;
  }

  #hamburger-line-one {
    width: 4rem;
    height: 1rem;
    background-color: #444;
  }

  #social-media-links {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-top: 10rem;
    padding-bottom: 20rem;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  #social-media-links a {
    writing-mode: vertical-rl;
    text-orientation: mixed;
  }

  #arrows-container {
    display: flex;
    position: absolute;
    bottom: 0;
    left: -100%;
    width: 14rem;
    height: 6rem;
  }

  .arrow-div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 6rem;
    height: 6rem;
  }

  #forward-arrow {
    background: #ddd;
  }

  #forward-arrow {
    background: ${props => props.theme.primaryColor};
  }
`;

export default function sidebar() {
  return (
    <Aside>
      <div id="hamburger">
        <span id="hamburger-line-one" />
        <span id="hamburger-line-two" />
        <span id="hamburger-line-three" />
      </div>
      <div id="social-media-links">
        <a>facebook</a>
        <a>twitter</a>
      </div>
      <div id="arrows-container">
        <div id="forward-arrow" className="arrow-div">
          Forward
        </div>
        <div id="backward-arrow" className="arrow-div">
          Backward
        </div>
      </div>
    </Aside>
  );
}
