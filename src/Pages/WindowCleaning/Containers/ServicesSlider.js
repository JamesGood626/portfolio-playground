import React, { Component } from "react";
import styled from "styled-components";
import { ServicesSliderOptions } from "../Components/ServicesSliderOptions";
import { ServicesDescription } from "../Components/ServicesDescription";
import { serviceOptionsConfig } from "../Config/servicesConfig";

// const COMMERCIAL = "commercial";
// const RESIDENTIAL = "residential";
// const REAL_ESTATE = "real_estate";
// const PRESSURE_WASHING = "pressure_washing";
// const SOLAR_PANEL_CLEANING = "solar_panel_cleaning";

const SliderContainer = styled.div`
  width: 90vw;
  max-width: 900px;
  margin: 2rem;
  background: linear-gradient(
    120deg,
    rgba(90, 185, 234, 0.7),
    rgba(136, 96, 208, 0.7)
  );

  // Adding this so that I may add padding to the contained elements
  // Which helps with keeping the divs the optimal size across smaller devices
  // In which the divs more often than not need to expand past 100vw
  // Actually, I may just need to take that aproach across all screens
  @media (min-width: 640px) {
    height: 500px;
  }
`;

const ServicesDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export default class ServicesSlider extends Component {
  state = {
    selectedService: serviceOptionsConfig.COMMERCIAL.serviceOptionText
  };

  showNewServiceDescription = e => {
    this.setState({
      selectedService: serviceOptionsConfig[e.target.id].serviceOptionText
    });
  };
  render() {
    return (
      <SliderContainer>
        <ServicesSliderOptions
          showNewServiceDescription={this.showNewServiceDescription}
          serviceOptions={serviceOptionsConfig}
        />
        <ServicesDescriptionContainer>
          <ServicesDescription
            selectedService={this.state.selectedService}
            serviceOptionsConfig={serviceOptionsConfig}
          />
        </ServicesDescriptionContainer>
      </SliderContainer>
    );
  }
}
