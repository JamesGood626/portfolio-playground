import React from "react";
import styled from "styled-components";
import Arrow from "./arrow";

const logIt = e => {
  console.log(e.target);
};

const ArrowContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 4rem;
  min-height: 9rem;
  height: 9rem;
  background: blue;
`;

const animControls = ({ animateUp, animateDown }) => {
  return (
    <ArrowContainer>
      <Arrow animateUp={animateUp} direction={"UP"} />
      <Arrow animateUp={animateDown} direction={"DOWN"} onMouseDown={logIt} />
    </ArrowContainer>
  );
};

export default animControls;
