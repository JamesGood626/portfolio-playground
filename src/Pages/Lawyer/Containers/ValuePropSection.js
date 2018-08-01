import React, { Component } from "react";
import { valuePropConfig } from "../Config/valuePropConfig";
import { CTAButton } from "../Components/CTAButton";
import {
  FlexColJCAICenterSection,
  FlexColJCSpaceAroundAICenterDiv
} from "../../../LayoutStyledComponents";

const ValuePropContainerSection = FlexColJCAICenterSection.extend`
  height: 60rem;
  padding: 0;
  width: 100%;

  @media (max-height: 480px) {
    margin: 10vh 0;
  }

  @media (min-width: 1100px) {
    height: 50rem;
  }
`;

const ValuePropCardContainerDiv = FlexColJCSpaceAroundAICenterDiv.extend`
  align-self: center
  height: auto;
  width: 90%;
  max-width: 60rem;
  box-shadow: 0px 4px 30px -4px #555;

  & > h2 {
    width: 90%;
    margin-top: 6vh;
    font-size: 2rem;
    text-align: center;
  }

  & > p {
    width: 90%;
    margin-top: 2vh;
  }

  & > button {
    margin-top: 2vh;
    margin-bottom: 4vh;
    color: #222;
    border: 2px solid #222;
  }

  @media (min-width: 768px) {
    justify-content: space-around;
  }

  @media (min-width: 1100px) {
    & > h2 {
      margin-top: 8vh;
    }
    
    & > p {
      margin-top: 4vh;
    }

    & > button {
      margin-top: 2vh;
      margin-bottom: 6vh;
    }
  }
`;

export default class ValuePropSection extends Component {
  render() {
    return (
      <ValuePropContainerSection>
        <ValuePropCardContainerDiv>
          <h2>{valuePropConfig.header}</h2>
          <p>{valuePropConfig.paragraph}</p>
          <CTAButton>{valuePropConfig.buttonText}</CTAButton>
        </ValuePropCardContainerDiv>
      </ValuePropContainerSection>
    );
  }
}

/*************************
*** Value Prop Section ***
*************************/

/* This could have potentially been easier */
/* If I wrap the h3, p, and button, inside of */
/* another div, inside of the valueprop-section div */
/* To prevent excessive spacing between the elements */
/* On taller screen heights */

// .layout-valueprop-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 60rem;
//   padding: 0;
//   width: 100%;
// }

// .valueprop-section {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-around;
//   align-self: center
//   height: auto;
//   width: 90%;
//   max-width: 60rem;
//   box-shadow: 0px 4px 30px -4px #555;

// }

// .valueprop-section > h2 {
//   width: 90%;
//   margin-top: 6vh;
//   font-size: 2rem;
//   text-align: center;
// }

// .valueprop-section > p {
//   width: 90%;
//   margin-top: 2vh;
// }

// .valueprop-section > button {
//   margin-top: 2vh;
//   margin-bottom: 4vh;
//   color: #222;
//   border: 2px solid #222;
// }

// @media (max-height: 480px) {
//   .layout-valueprop-container {
//     margin: 10vh 0;
//   }
// }

// @media (min-width: 768px) {
//   .valueprop-section {
//     justify-content: space-around;
//   }
// }

// @media (min-width: 1100px) {
//   .layout-valueprop-container {
//     height: 50rem;
//   }

// .valueprop-section > h2 {
//   margin-top: 8vh;
// }

// .valueprop-section > p {
//   margin-top: 4vh;
// }

// .valueprop-section > button {
//   margin-top: 2vh;
//   margin-bottom: 6vh;
// }
// }
