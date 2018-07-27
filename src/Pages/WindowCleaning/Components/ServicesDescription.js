import React, { Fragment } from "react";
import styled from "styled-components";
import { CTAButton } from "./CTAButton";
// import { ServiceQuoteForm } from "./ServiceQuoteForm";
import { FlexColJCAICenterDiv } from "../../../LayoutStyledComponents";

const Container = FlexColJCAICenterDiv.extend`
  width: 80%;
  height: 82%;
  background: #fcfcfc;
`;

const HeaderText = styled.h2`
  color: #84ceeb;
  font-size: 2.2rem;
`;
const DescriptionText = styled.p`
  // margin: 2vh 0;
  color: #999;
  font-size: 1.4rem;
`;

// This definitely needs a unit test

// And now, I'm thinking of adding additional logic to determine the children of
// the fragment. Will definitely split that out into a separate function, AND test this
// component before adding that extra stuff.
// For taking into account the Getting a Quote feature, I'll add that state to the
// ServicesSlider Container and pass it in here:
// If it's null I'll just render the headerText and DescText
// If it contains a string for which service to provide a quote for, then
// It'll render the form specific to that, and a config obj and function will be
// passed down to deal with that logic, and make it look like it's dynamic.
const renderDescriptionText = (selectedService, serviceOptionsConfig) => {
  return Object.getOwnPropertyNames(
    serviceOptionsConfig
  ).reduce((acc, curr) => {
    const serviceOptionText = serviceOptionsConfig[curr].serviceOptionText;
    if (selectedService === serviceOptionText) {
      const headerText = serviceOptionsConfig[curr].descriptionHeader;
      const paraText = serviceOptionsConfig[curr].descriptionPara;
      acc.push(
        <Fragment key={serviceOptionText}>
          <HeaderText data-testid="services-header-text">
            {headerText}
          </HeaderText>
          <DescriptionText data-testid="services-description-text">
            {paraText}
          </DescriptionText>
        </Fragment>
      );
    }
    return acc;
  }, []);
};

// You'll want to pass in a third parameter which will be the
// config for the specific services and pricing catered to the service for
// which the quote was requested. -> that config object will be ServiceQuoteForm's props
// COMMENTING THIS OUT FOR NOW BECAUSE I THINK I OVERLOOKED A SIMPLER SOLUTION
// const renderServiceQuoteForm = (quoteRequested, serviceOptionsConfig) => {
//   return Object.getOwnPropertyNames(
//     serviceOptionsConfig
//   ).reduce((acc, curr) => {
//     const serviceOptionText = serviceOptionsConfig[curr].serviceOptionText;
//     if (quoteRequested === serviceOptionText) {
//       // const headerText = serviceOptionsConfig[curr].descriptionHeader;
//       // const paraText = serviceOptionsConfig[curr].descriptionPara;
//       acc.push(<ServiceQuoteForm />);
//     }
//     return acc;
//   }, []);
// };

export const ServicesDescription = ({
  quoteRequested,
  selectedService,
  serviceOptionsConfig,
  updateQuoteRequested
}) => {
  return (
    <Container>
      {renderDescriptionText(selectedService, serviceOptionsConfig)[0]}
      <CTAButton onClick={updateQuoteRequested}>Get Quote</CTAButton>
    </Container>
  );
};

// {
//   !quoteRequested
//     ? renderDescriptionText(selectedService, serviceOptionsConfig)[0]
//     : renderServiceQuoteForm(quoteRequested, serviceOptionsConfig)[0];
// }
