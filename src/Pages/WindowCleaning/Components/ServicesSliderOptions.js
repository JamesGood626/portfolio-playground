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

export const ServicesSliderOptions = ({
  showNewServiceDescription,
  serviceOptions
}) => {
  return (
    <SliderOptionsContainer>
      {Object.getOwnPropertyNames(serviceOptions).map(property => (
        <OptionText id={property} onClick={showNewServiceDescription}>
          {serviceOptions[property].serviceOptionText}
        </OptionText>
      ))}
    </SliderOptionsContainer>
  );
};
