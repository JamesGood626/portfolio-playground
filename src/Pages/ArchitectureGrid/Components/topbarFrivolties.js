import React from "react";
import styled from "styled-components";

const Topbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 6rem;
  width: 100%;
  padding-left: 2.4rem;
  padding-right: 2.4rem;

  .line {
    width: 0.2rem;
    height: 1rem;
  }

  .black {
    background: #222;
  }

  .red {
    background: red;
  }
`;

export default function topbarFrivolties() {
  return (
    <Topbar>
      <span class="black line" />
      <span class="black line" />
      <span class="red line" />
    </Topbar>
  );
}
