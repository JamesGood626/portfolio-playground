import React from "react";
import styled from "styled-components";
import { CTAButton } from "./CTAButton";

const ContentContainer = styled.div`
  position: absolute;
  bottom: 10%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 40vh;
  width: 100%;
`;

const HeadlineText = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <HeadlineText class="header-headline-text">
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
