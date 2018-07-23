import React from "react";
import styled from "styled-components";

const SliderOptionsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 18%;
  border-bottom: 3px solid #fcfcfc;

  // Desktop Styles
  @media (min-width: 1100px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: blue;
  }
`;

const OptionText = styled.h3`
  height: 100%;
  width: 100%;
`;

// Need to get the OptionText by ID for testing purposes
const renderServiceOptions = (serviceOptions, showNewServiceDescription) => {
  return Object.getOwnPropertyNames(serviceOptions).map(property => (
    <OptionText
      id={property}
      key={property}
      onClick={showNewServiceDescription}
    >
      {serviceOptions[property].serviceOptionText}
    </OptionText>
  ));
};

export const ServicesSliderOptions = ({
  showNewServiceDescription,
  serviceOptions
}) => {
  return (
    <SliderOptionsContainer>
      {renderServiceOptions(serviceOptions, showNewServiceDescription)}
    </SliderOptionsContainer>
  );
};
