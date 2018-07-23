import React, { Component } from "react";
import styled from "styled-components";
import ServicesSlider from "./ServicesSlider";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: #999;
`;

export default class ServicesSliderSection extends Component {
  render() {
    return (
      <StyledSection>
        <h1>Services</h1>
        <ServicesSlider />
      </StyledSection>
    );
  }
}
