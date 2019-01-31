import React from "react";
import styled from "styled-components";

const Arrow = styled.div`
  width: 4rem;
  height: 4rem;
  background: orange;
  clip-path: ${props =>
    props.direction === "UP"
      ? `polygon(50% 0%, 0% 100%, 100% 100%)`
      : `polygon(100% 0, 0 0, 50% 100%)`};
`;

const arrow = ({ direction, animateUp, animateDown }) => {
  return (
    <Arrow
      onClick={animateUp ? animateUp : animateDown}
      direction={direction}
    />
  );
};

export default arrow;
