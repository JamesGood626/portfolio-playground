import React from "react";
import styled from "styled-components";
import "../Styles/main.css";

const Svg = styled.svg`
  height: 9rem;
  width: 9rem;
  margin-top: 1rem;

  @media (min-width: 600px) {
    height: 12rem;
    width: 12rem;
  }
`;

export const Logo = () => {
  return (
    <Svg
      id="Layer_1"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 96 57"
    >
      <g id="circleOutline">
        <circle className="cls-1" cx="43.5" cy="28.5" r="28" />
        <path
          className="cls-2"
          d="M125.5 97A27.5 27.5 0 1 1 98 124.5 27.54 27.54 0 0 1 125.5 97m0-1a28.5 28.5 0 1 0 28.5 28.5A28.5 28.5 0 0 0 125.5 96z"
          transform="translate(-82 -96)"
        />
      </g>
      <text className="cls-3" transform="translate(26.68 19.17)">
        CCC
      </text>
      <text className="cls-5" transform="translate(0 34.95)">
        Window
      </text>
      <text className="cls-5" transform="translate(39.99 48.73)">
        Cleaning
      </text>
    </Svg>
  );
};
