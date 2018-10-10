import React from "react";
import styled from "styled-components";
import Media from "react-media";
import { FlexJCSpaceAroundAICenterDiv } from "../../../LayoutStyledComponents";

const SliderOptionsContainer = FlexJCSpaceAroundAICenterDiv.extend`
  width: 100%;
  height: 80px;
  border-bottom: 2px solid #999;
`;

const OptionText = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  font-size: 1rem;
  font-family: ${props => props.theme.mainFont};
  color: ${props => (props.active ? `#fcfcfc` : `#999`)};
  background: ${props => (props.active ? props.theme.primaryColor : null)};
  border-left: ${props => (props.addBorder ? `2px solid #999` : null)};

  &:hover {
    color: #fcfcfc;
    background: ${props => props.theme.secondaryColor};
  }
`;

const Label = styled.label`
  display: block;
  position: relative;
  width: 100%;
  height: 100%;
`;

const Select = styled.select`
  width: 100%;
  height: 100%;
  font-size: 2rem;
  // Gets rid of the arrows
  -webkit-appearance: none;
  border: 0;
  border-radius: 0;

  &:hover {
    cursor: pointer;
  }

  &:focus {
    outline: none;
  }
`;

const LabelTextSpan = styled.span`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fcfcfc;
  line-height: 30px;
  font-size: ${props => props.theme.serviceDropDownFontSize};
  font-family: ${props => props.theme.mainFont};
  color: #fcfcfc;
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background: ${props => props.theme.primaryColor};

  @media (min-width: 600px) {
    font-size: ${props => props.theme.serviceDropDownFontSize600W};
  }

  &:after {
    content: ">";
    display: block;
    position: absolute;
    top: 30%;
    right: 5%;
    height: 2rem;
    transform: rotate(90deg);
  }
`;

// Need to get the OptionText by ID for testing purposes
const renderServiceOptions = (
  selectedService,
  serviceOptions,
  showNewServiceDescription
) => {
  return Object.getOwnPropertyNames(serviceOptions).map((property, i) => (
    <OptionText
      id={property}
      key={property}
      addBorder={i === 0 ? false : true}
      active={
        selectedService === serviceOptions[property].serviceOptionText
          ? true
          : false
      }
      onClick={showNewServiceDescription}
    >
      {serviceOptions[property].serviceOptionText}
    </OptionText>
  ));
};

const renderServiceOptionsDropDown = (
  selectedService,
  serviceOptions,
  showNewServiceDescription
) => {
  return (
    <Label htmlFor="option-select">
      <Select id="option-select" onChange={showNewServiceDescription}>
        {Object.getOwnPropertyNames(serviceOptions).map((property, i) => (
          <option id={property} key={property} value={property}>
            {serviceOptions[property].serviceOptionText}
          </option>
        ))}
      </Select>
      <LabelTextSpan>{selectedService}</LabelTextSpan>
    </Label>
  );
};

export const ServicesSliderOptions = ({
  showNewServiceDescription,
  serviceOptions,
  selectedService
}) => {
  return (
    <SliderOptionsContainer>
      <Media query="(min-width: 900px)">
        {matches =>
          matches
            ? renderServiceOptions(
                selectedService,
                serviceOptions,
                showNewServiceDescription
              )
            : renderServiceOptionsDropDown(
                selectedService,
                serviceOptions,
                showNewServiceDescription
              )
        }
      </Media>
    </SliderOptionsContainer>
  );
};
