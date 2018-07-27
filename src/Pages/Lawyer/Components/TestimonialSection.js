import React from "react";
import styled from "styled-components";
import {
  FlexJCCenterAIStartSection,
  FlexJCAICenterDiv,
  FlexColJCAICenterDiv,
  FlexColAICenterDiv
} from "../../../LayoutStyledComponents";

// The responsiveness is gone... Did I miss some styles?

const TestimonialContainerSection = FlexJCCenterAIStartSection.extend`
  width: 100%;
  padding: 0;
  color: #fcfcfc;
  background: maroon;
`;

const TestimonialInnerContainerDiv = FlexColJCAICenterDiv.extend`
  padding: 0;
  max-width: 60rem;
  margin-bottom: 10vh;
  background: orange;
  & > h2 {
    font-size: 2rem;
    margin-top: 10vh;
  }
`;

const TestimonialCardContainerDiv = FlexJCAICenterDiv.extend`
  align-self: center;
  width: 90%;
  margin-top: 4vh;
  background: blue;
`;

const TestimonialCard = FlexColJCAICenterDiv.extend`
  height: 50vh;
  min-height: 300px;
  max-height: 420px;
  width: 220px;
  margin: 0 0.4rem;
  box-shadow: 0px 4px 30px -4px #555;
  background: #fcfcfc;

  @media (min-width: 524px) {
    width: 280px;
  }
`;

const TestimonialCardContentContainerDiv = FlexColAICenterDiv.extend`
  height: 85%;
  padding: 0;
  width: 85%;
  background: lime;
`;

const TestimonialIconContainerDiv = styled.div`
  position: relative;
  height: 120px;
  width: 120px;
  border: 2px solid #222;
`;

const TestimonialCardHeader = styled.h3`
  position: relative;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 8%;
    left: -9%;
    height: 1.5rem;
    border-left: 4px solid #222;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: 8%;
    right: -9%;
    height: 1.5rem;
    border-right: 4px solid #222;
  }
`;

export const TestimonialSection = () => {
  return (
    <TestimonialContainerSection>
      <TestimonialInnerContainerDiv>
        <h2>What Our Clients Are Saying</h2>
        <TestimonialCardContainerDiv>
          <span>"LA"</span>
          <TestimonialCard className="testimonial-card hide-card--one" />
          <TestimonialCard>
            <TestimonialCardContentContainerDiv>
              <TestimonialIconContainerDiv>;D</TestimonialIconContainerDiv>
              <TestimonialCardHeader>Jenn Burke</TestimonialCardHeader>
              <p>
                Lorem Ipsum dolor sit upon. They did an outstanding job I really
                wouldn't dream of hiring any other firm to handle the bull crap
                the comes our way. Do yourself a favor and hire them for their
                outrageous price.
              </p>
            </TestimonialCardContentContainerDiv>
          </TestimonialCard>
          <TestimonialCard className="testimonial-card hide-card--two" />
          <span>"RA"</span>
        </TestimonialCardContainerDiv>
      </TestimonialInnerContainerDiv>
    </TestimonialContainerSection>
  );
};

/*******************************
*** Testimonial Prop Section ***
*******************************/

// /*  Switch to one card here. */
// @media (max-width: 900px) {
//   .hide-card--one {
//     display: none;
//   }
// }

// @media (max-width: 600px) {
//   .hide-card--two {
//     display: none;
//   }
// }

// /* Gonna need to have only one card display for mobile screens */
// .testimonial-card {
//   height: 50vh;
//   min-height: 300px;
//   max-height: 420px;
//   width: 220px;
//   margin: 0 0.4rem;
//   box-shadow: 0px 4px 30px -4px #555;
//   background: #fcfcfc;
// }

// @media (min-width: 524px) {
//   .testimonial-card {
//     width: 280px;
//   }
// }

// Was already commented out
/* .testimonial-icon-container::after {
  content: "";
  display: block;
  position: absolute;
  bottom: -20px;
  left: calc(50% - 10px);
  height: 4px;
  width: 20px;
  background: #222;
} */
