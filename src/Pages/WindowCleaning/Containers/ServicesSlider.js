import React, { Component } from "react";
import styled from "styled-components";
import { ServicesSliderOptions } from "../Components/ServicesSliderOptions";
import ServicesDescription from "../Components/ServicesDescription";
import ServiceQuoteForm from "../Components/ServiceQuoteForm";
import { serviceOptionsConfig } from "../Config/servicesConfig";
import { quotePricingConfig } from "../Config/quotePricingConfig";
import { FlexColAICenterDiv } from "../../../LayoutStyledComponents";

const SliderContainer = styled.div`
  width: 90vw;
  max-width: 900px;
  margin: 10vh 0;
  background: #fcfcfc;
  // animate transition on hover
  box-shadow: 0px 4px 30px -4px #555;

  // Adding this so that I may add padding to the contained elements
  // Which helps with keeping the divs the optimal size across smaller devices
  // In which the divs more often than not need to expand past 100vw
  // Actually, I may just need to take that aproach across all screens
  @media (min-width: 640px) {
    height: 500px;
  }
`;

// background: linear-gradient(
//     120deg,
//     rgba(90, 185, 234, 0.7), #5ab9ea
//     rgba(136, 96, 208, 0.7) #8860d0
//   );

const ServicesDescriptionContainer = FlexColAICenterDiv.extend`
  width: 100%;
  height: 100%;
`;

export default class ServicesSlider extends Component {
  state = {
    quoteRequested: null,
    selectedService: serviceOptionsConfig.COMMERCIAL.serviceOptionText
  };

  showNewServiceDescription = async e => {
    const key = e.target.id !== "option-select" ? e.target.id : e.target.value;
    await this.setState((prevState, state) => ({
      selectedService: serviceOptionsConfig[key].serviceOptionText,
      quoteRequested: null
    }));
  };

  updateQuoteRequested = e => {
    this.setState((prevState, state) => ({
      quoteRequested:
        quotePricingConfig[
          prevState.selectedService
            .replace(" ", "_")
            .replace(" ", "_")
            .toUpperCase()
        ]
    }));
  };

  render() {
    const { quoteRequested, selectedService } = this.state;
    return (
      <SliderContainer>
        <ServicesSliderOptions
          showNewServiceDescription={this.showNewServiceDescription}
          serviceOptions={serviceOptionsConfig}
          selectedService={selectedService}
        />
        <ServicesDescriptionContainer>
          {!quoteRequested ? (
            <ServicesDescription
              selectedService={selectedService}
              serviceOptionsConfig={serviceOptionsConfig}
              updateQuoteRequested={this.updateQuoteRequested}
            />
          ) : (
            <ServiceQuoteForm quotePricing={quoteRequested} />
          )}
        </ServicesDescriptionContainer>
      </SliderContainer>
    );
  }
}
