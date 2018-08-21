import React from "react";
import styled from "styled-components";
import { FlexColJCFlexStartAICenterDiv } from "../../../LayoutStyledComponents";
import { CTAButton } from "./CTAButton";

const ContentContainer = FlexColJCFlexStartAICenterDiv.extend`
  position: absolute;
  bottom: 10%;
  height: 40vh;
  width: 100%;
`;

// display: flex;
//   flex-direction: column;
//   justify-content: flex-start;
//   align-items: center;

const HeadlineText = styled.h1`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: ${props => props.theme.mainFont};
  font-size: ${props => props.theme.headerFontSize};
  margin-bottom: 6vh;
  color: ${props => props.theme.whiteColor};

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

// Example of using theme props
// const ContactText = styled.div`
//   height: 5rem;
//   margin-top: 1.2rem;
//   margin-bottom: 0;
//   text-align: center;
//   font-family: ${props => props.theme.mainFont};
//   font-size: ${props => props.theme.paraFontSize};
//   color: #fcfcfc;

//   @media (min-width: 670px) {
//     margin-top: -1.1rem;
//   }
// `;

export const HeaderContent = () => {
  return (
    <ContentContainer>
      <HeadlineText>
        <span>You Want Excellent Litigation</span>
        <span>We'll Provide It</span>
      </HeadlineText>
      <CTAButton>Let's Talk</CTAButton>
    </ContentContainer>
  );
};
