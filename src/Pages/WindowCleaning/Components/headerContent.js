import React from "react";
import styled from "styled-components";
import { CTAButton } from "./CTAButton";
import { FlexColJCAICenterDiv } from "../../../LayoutStyledComponents";

const ContentContainer = FlexColJCAICenterDiv.extend`
  position: absolute;
  bottom: 10%;
  height: 45vh;
  width: 100%;
`;

const HeadlineText = styled.h1`
  font-family: ${props => props.theme.mainFont};
  font-size: ${props => props.theme.headerFontSize};
  margin-bottom: 5vh;
  color: #fcfcfc;

  @media (min-width: 500px) {
    font-size: ${props => props.theme.headerFontSize500W};
  }

  @media (min-width: 768px) {
    font-size: ${props => props.theme.headerFontSize768W};
  }

  @media (min-width: 1024px) {
    font-size: ${props => props.theme.headerFontSize1024W};
  }
`;

const ContactText = styled.div`
  height: 5rem;
  margin-top: 1.2rem;
  margin-bottom: 0;
  text-align: center;
  font-family: ${props => props.theme.mainFont};
  font-size: ${props => props.theme.paraFontSize};
  color: #fcfcfc;

  @media (min-width: 670px) {
    margin-top: -1.5rem;
  }
`;

const ContactNumber = styled.p`
  margin-top: 1rem;
  font-size: ${props => props.theme.paraFontSize};
  font-family: ${props => props.theme.mainFont};
`;

export const HeaderContent = () => {
  return (
    <ContentContainer>
      <HeadlineText>
        <p>Wakanda Foreva!</p>
      </HeadlineText>
      <CTAButton addMarginTop={true}>Get a Quote</CTAButton>
      <ContactText>
        <p>Or Call</p>
        <ContactNumber>(602) 842-8832</ContactNumber>
      </ContactText>
    </ContentContainer>
  );
};
