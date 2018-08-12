import React from "react";
import styled, { ThemeProvider } from "styled-components";
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
  font-size: 2.2rem;
  margin-bottom: 6vh;
  color: #fcfcfc;
`;

// const ContactText = styled.div`
//   height: 5rem;
//   margin-top: 0.6rem;
//   text-align: center;
//   color: #fcfcfc;
// `;

const theme = {
  main: "lime"
};

// flexColJCAICenter: {
//     display: "flex",
//     "flex-direction": "column",
//     "justify-content": "center",
//     "align-items": "center",
//     background: "orange"
//   }
// ${props => props.theme.flexColJCAICenter};

// const ContactNumber = styled.p`
//   margin-top: 1.4rem;
// `;

export const HeaderContent = () => {
  return (
    <ThemeProvider theme={theme}>
      <ContentContainer>
        <HeadlineText>
          <span>You Want Excellent Litigation</span>
          <span>We'll Provide It</span>
        </HeadlineText>
        <CTAButton>Let's Talk</CTAButton>
      </ContentContainer>
    </ThemeProvider>
  );
};
