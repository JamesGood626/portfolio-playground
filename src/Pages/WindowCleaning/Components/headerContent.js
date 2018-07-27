import React from "react";
import styled from "styled-components";
import { CTAButton } from "./CTAButton";
import { FlexColJCAICenterDiv } from "../../../LayoutStyledComponents";

const ContentContainer = FlexColJCAICenterDiv.extend`
  position: absolute;
  bottom: 10%;
  height: 40vh;
  width: 100%;
`;

const HeadlineText = styled.h1`
  font-size: 2.2rem;
  margin-bottom: 6vh;
  color: #fcfcfc;
`;

const ContactText = styled.div`
  height: 5rem;
  margin-top: 0.6rem;
  text-align: center;
  color: #fcfcfc;
`;

const ContactNumber = styled.p`margin-top: 1.4rem;`;

export const HeaderContent = () => {
  return (
    <ContentContainer>
      <HeadlineText>
        <p>Wakanda Foreva!</p>
      </HeadlineText>
      <CTAButton>Get a Quote</CTAButton>
      <ContactText>
        <p>Or Call</p>
        <ContactNumber>(602) 842-8832</ContactNumber>
      </ContactText>
    </ContentContainer>
  );
};
