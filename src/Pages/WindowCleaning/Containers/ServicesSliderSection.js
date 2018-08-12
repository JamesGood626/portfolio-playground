import React, { Component } from "react";
// import styled from "styled-components";
import ServicesSlider from "./ServicesSlider";
import { FlexColJCAICenterSection } from "../../../LayoutStyledComponents";

const StyledSection = FlexColJCAICenterSection.extend`
  width: 100vw;
  background: #fcfcfc;
`;

export default class ServicesSliderSection extends Component {
  render() {
    return (
      <StyledSection>
        <ServicesSlider />
      </StyledSection>
    );
  }
}
