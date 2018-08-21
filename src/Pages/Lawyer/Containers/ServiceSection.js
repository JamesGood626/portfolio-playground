import React, { Component } from "react";
import styled from "styled-components";
import { ServiceCards } from "../Components/serviceCards";
import {
  FlexColJCFlexStartAICenterSection,
  FlexWrapJCAICenterDiv
} from "../../../LayoutStyledComponents";
import { serviceCardConfig } from "../Config/serviceCardConfig";

const ServicesSectionContainer = FlexColJCFlexStartAICenterSection.extend`
  margin-bottom: 0;
  height: 100%;
  width: 100vw;
`;

// The align-self: center and width: 90vw were in a helper class .container before.
const ServicesInnerContainerDiv = styled.div`
  align-self: center;
  width: 90vw;
  height: 100%;
  margin-top: 10vh;
  text-align: center;

  & > h2 {
    font-family: ${props => props.theme.mainFont};
    font-size: ${props => props.theme.serviceHeaderFontSize};
  }

  @media (min-width: 500px) {
    & > h2 {
      font-size: ${props => props.theme.serviceHeaderFontSize500W};
    }
  }
`;

const ServicesCardContainerDiv = FlexWrapJCAICenterDiv.extend`
  margin-top: 1rem;
  height: auto;
  width: 100%;
`;

export default class ServiceSection extends Component {
  render() {
    return (
      <ServicesSectionContainer>
        <ServicesInnerContainerDiv>
          <h2>What We Do</h2>
          <ServicesCardContainerDiv>
            <ServiceCards serviceCardConfig={serviceCardConfig} />
          </ServicesCardContainerDiv>
        </ServicesInnerContainerDiv>
      </ServicesSectionContainer>
    );
  }
}

/*************************
 **** Services Section ****
 *************************/
// .services-card-container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
//   align-items: center;
//   margin-top: 1rem;
//   height: auto;
//   width: 100%;
//   /* background: lime; */
// }
