import React, { Fragment } from "react";
import styled from "styled-components";
import {
  FlexColJCAICenterDiv,
  FlexColAICenterDiv
} from "../../../LayoutStyledComponents";

// Okay, need to adjust height of cards on the smallest of screen sizes, as the
// paragraph text is overflowing out of the div. It's really only a problem on
// screens less than 350px.

const ServiceCard = FlexColJCAICenterDiv.extend`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  height: 420px;
  width: 320px;
  margin: 2rem 2rem;
  box-shadow: 0px 4px 30px -4px #555;
  background: #fcfcfc;

  @media (min-width: 542px) {
    .services-card {
      width: 350px;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

const ServiceCardContentContainerDiv = FlexColAICenterDiv.extend`
  height: 85%;
  padding: 0;
  width: 85%;

  & > h3 {
    font-size: ${props => props.theme.cardHeaderFontSize};
  }

  & > p {
    width: 100%;
    margin-top: 0.6rem;
    font-family: ${props => props.theme.secondaryFont};
    font-size: ${props => props.theme.paraFontSize};
    line-height: ${props => props.theme.paraLineHeight};
    letter-spacing: ${props => props.theme.paraLetterSpacing};
  }

  @media (min-width: 500px) {
    & > h3 {
      font-size: ${props => props.theme.cardHeaderFontSize500W};
    }
  }
`;

const ServiceCardIconContainerDiv = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;
  margin-bottom: 0.6rem;

  // &:after {
  //   content: "";
  //   display: block;
  //   position: absolute;
  //   bottom: -40px;
  //   left: calc(50% - 10px);
  //   height: 4px;
  //   width: 20px;
  //   background: #222;
  // }
`;

const ServiceCardHeader = styled.h3`
  position: relative;
  font-size: ${props => props.theme.serviceCardHeaderFontSize};

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 2%;
    left: -0.8rem;
    height: 1.5rem;
    border-left: 4px solid #222;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 8%;
    right: -0.8rem;
    height: 1.5rem;
    border-right: 4px solid #222;
  }

  @media (max-width: 500px) {
    &:before {
      top: -20%;
    }

    &:after {
      top: -14%;
    }
  }
`;

const renderCards = serviceCardConfig => {
  return serviceCardConfig.map(card => {
    return (
      <ServiceCard key={card.header}>
        <ServiceCardContentContainerDiv>
          <ServiceCardIconContainerDiv>{card.icon}</ServiceCardIconContainerDiv>
          <ServiceCardHeader>{card.header}</ServiceCardHeader>
          <p>{card.paragraph}</p>
        </ServiceCardContentContainerDiv>
      </ServiceCard>
    );
  });
};

export const ServiceCards = ({ serviceCardConfig }) => {
  return <Fragment>{renderCards(serviceCardConfig)}</Fragment>;
};

{
  /* <svg
  id="Layer_1"
  data-name="Layer 1"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 41.01 41.01"
>
  <path
    d="M128 108.91L147.09 128 128 147.09 108.91 128 128 108.91m0-1.42L107.49 128 128 148.51 148.51 128 128 107.49z"
    transform="translate(-107.49 -107.49)"
  />
</svg> */
}

/* <div class="services-card">
  <div class="services-content-container">
    <div class="services-icon-container">;D</div>
    <h3 class="services-card-header">VC Fund Information</h3>
    <p>
      We are a proud legal counsel to several prominent venture capital funds,
      angel investors and accelerators from all across the United States.
    </p>
  </div>
</div>; */

// .services-content-container > h3 {
//   font-size: 1.4rem;
// }

// .services-content-container > p {
//   width: 100%;
//   margin-top: 30px;
// }

// .services-card {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 420px;
//   width: 320px;
//   margin: 2rem 2rem;
//   box-shadow: 0px 4px 30px -4px #555;
//   background: #fcfcfc;
// }

// .services-content-container {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 85%;
//   padding: 0;
//   width: 85%;
//   background: lime;
// }

// .services-icon-container {
//   position: relative;
//   height: 120px;
//   width: 120px;
//   border: 2px solid #222;
// }

// .services-icon-container::after {
//   content: "";
//   display: block;
//   position: absolute;
//   bottom: -20px;
//   left: calc(50% - 10px);
//   height: 4px;
//   width: 20px;
//   background: #222;
// }

// .services-card-header {
//   position: relative;
// }

// .services-card-header::before {
//   content: "";
//   display: block;
//   position: absolute;
//   top: 8%;
//   left: -9%;
//   height: 1.5rem;
//   border-left: 4px solid #222;
// }

// .services-card-header::after {
//   content: "";
//   display: block;
//   position: absolute;
//   top: 8%;
//   right: -9%;
//   height: 1.5rem;
//   border-right: 4px solid #222;
// }

// @media (min-width: 542px) {
//   .services-card {
//     width: 350px;
//     margin-top: 1rem;
//     margin-bottom: 1rem;
//   }
// } */}
