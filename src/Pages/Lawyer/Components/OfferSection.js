import React from "react";
import styled from "styled-components";
import { CTAButton } from "./CTAButton";
import {
  FlexJCCenterSection,
  FlexColJCSpaceBetweenAICenterDiv
} from "../../../LayoutStyledComponents";

const OfferContainerSection = FlexJCCenterSection.extend`
  height: auto;
  width: 100%;
  margin-top: 12vh;
  background: maroon;
  color: #fcfcfc;
`;

const OfferInnerContainerDiv = FlexColJCSpaceBetweenAICenterDiv.extend`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: space-between;
  height: 100%;
  max-width: 60rem;
  padding: 12vh 0;

  & > h2 {
    text-align: center;
    margin-top: -4vh;
    margin-bottom: 2vh;
    font-size: 2rem;
  }

  & > button {
    margin-bottom: -4vh;
  }
`;

export const OfferSection = () => {
  return (
    <OfferContainerSection>
      <OfferInnerContainerDiv>
        <h2>
          All lawyers think alike. But not all lawyers are great. See what makes
          the difference.
        </h2>
        <CTAButton>Download</CTAButton>
      </OfferInnerContainerDiv>
    </OfferContainerSection>
  );
};

/*************************
**** Offer Section ****
*************************/

// .layout-offer-container {
//   display: flex;
//   justify-content: center;
//   height: auto;
//   width: 100%;
//   margin-top: 12vh;
//   background: maroon;
//   color: #fcfcfc;
// }

// .offer-section {
//   height: 100%;
//   max-width: 60rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 12vh 0;
// }

// .offer-section > h2 {
//   text-align: center;
//   margin-top: -4vh;
//   margin-bottom: 2vh;
//   font-size: 2rem;
// }

// .offer-section > button {
//   margin-bottom: -4vh;
// }
