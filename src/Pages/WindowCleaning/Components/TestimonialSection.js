import React from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import "../Styles/main.css";
import { FlexColJCAICenterSection } from "../../../LayoutStyledComponents";

const Section = FlexColJCAICenterSection.extend`
  height: 100vh;
  width: 100vw;
  background: #fcfcfc;
`;

const ContainerDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 68rem;
`;

const TestimonialHeader = styled.h2`
  margin: 10vh 0;
  color: ${props => props.theme.primaryColor}
  line-height: ${props => props.theme.headerLineHeight}
  letter-spacing: ${props => props.theme.headerLetterSpacing}
  font-size: ${props => props.theme.testimonialHeaderFontSize};
  font-family: ${props => props.theme.mainFont};

  @media (min-width: 752px) {
    font-size: ${props => props.theme.testimonialHeaderFontSize752W};
  }
`;

const TestimonialCircleHeader = styled.h3`
  margin: 1rem 0;
  line-height: ${props => props.theme.headerLineHeight}
  letter-spacing: ${props => props.theme.headerLetterSpacing}
  color: ${props => props.theme.paraColor}
  font-size: ${props => props.theme.testimonialHeaderFontSize};
  font-family: ${props => props.theme.mainFont};
`;

const TestimonialCirclePara = styled.p`
  width: 75%;
  text-align: center;
  color: ${props => props.theme.paraColor}
  line-height: ${props => props.theme.paraLineHeight}
  letter-spacing: ${props => props.theme.paraLetterSpacing}
  font-size: ${props => props.theme.paraFontSize};
  font-family: ${props => props.theme.mainFont};
`;

// const CircleDiv = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 30rem;
//   width: 30rem;
//   border-radius: 50%;
//   border: ${props => `1px solid ${props.theme.mainColor}`}
//   background: #fcfcfc;
// `;

// const CircleLeft = CircleDiv.extend`
//   position: absolute;
//   left: 1%;
//   opacity: 0.2;
// `;

// const CircleMid = CircleDiv.extend`z-index: 100;`;

// const CircleRight = CircleDiv.extend`
//   position: absolute;
//   right: 1%;
// `;

const leftCircAnimIn = e => {
  // console.log("This is this.left: ", this.left.lastChild);
  // TweenMax.to(this.left.firstChild, 1, { scale: 1 });
  // TweenMax.to(this.left.lastChild, 1, { scale: 1 });
  TweenMax.fromTo(
    this.left,
    0.3,
    { scale: 1, border: "1px solid #999" },
    { scale: 1.04, border: "3px solid #84ceeb" }
  );
  TweenMax.fromTo(
    this.mid,
    0.3,
    { x: 0, opacity: 1 },
    { x: 210, opacity: 0.3 }
  );
  TweenMax.fromTo(
    this.right,
    0.3,
    { x: 0, opacity: 1 },
    { x: 20, opacity: 0.2 }
  );
};

const leftCircAnimOut = e => {
  TweenMax.fromTo(
    this.left,
    0.3,
    { scale: 1.04, border: "3px solid #84ceeb" },
    { scale: 1, border: "1px solid #999" }
  );
  TweenMax.fromTo(
    this.mid,
    0.3,
    { x: 210, opacity: 0.3 },
    { x: 0, opacity: 1 }
  );
  TweenMax.fromTo(
    this.right,
    0.3,
    { x: 20, opacity: 0.2 },
    { x: 0, opacity: 1 }
  );
};

const rightCircAnimIn = e => {
  TweenMax.fromTo(
    this.right,
    0.3,
    { scale: 1, border: "1px solid #999" },
    { scale: 1.04, border: "3px solid #84ceeb" }
  );
  TweenMax.fromTo(
    this.mid,
    0.3,
    { x: 0, opacity: 1 },
    { x: -210, opacity: 0.3 }
  );
  TweenMax.fromTo(
    this.left,
    0.3,
    { x: 0, opacity: 1 },
    { x: -20, opacity: 0.2 }
  );
};

const rightCircAnimOut = e => {
  TweenMax.fromTo(
    this.right,
    0.3,
    { scale: 1.04, border: "3px solid #84ceeb" },
    { scale: 1, border: "1px solid #999" }
  );
  TweenMax.fromTo(
    this.mid,
    0.3,
    {
      x: -210,
      opacity: 0.3
    },
    {
      x: 0,
      opacity: 1
    }
  );
  TweenMax.fromTo(
    this.left,
    0.3,
    { x: -20, opacity: 0.2 },
    { x: 0, opacity: 1 }
  );
};

const midCircAnimIn = e => {
  TweenMax.fromTo(
    this.mid,
    0.3,
    { scale: 1, border: "1px solid #999" },
    { scale: 1.04, border: "3px solid #84ceeb" }
  );
};

const midCircAnimOut = e => {
  TweenMax.fromTo(
    this.mid,
    0.3,
    { scale: 1.04, border: "3px solid #84ceeb" },
    { scale: 1, border: "1px solid #999" }
  );
};

export const TestimonialSection = () => {
  return (
    <Section>
      <TestimonialHeader>Testimonials</TestimonialHeader>
      <ContainerDiv>
        <div
          id="testimonial-circle-left"
          className="testimonial-circle"
          onMouseOver={leftCircAnimIn}
          onMouseOut={leftCircAnimOut}
          ref={x => (this.left = x)}
        >
          <TestimonialCircleHeader>Circle One</TestimonialCircleHeader>
          <TestimonialCirclePara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim, felis orttitor viverra imperdiet, turpis sem sodales
            ligula, ut mattis massa sem et diam.
          </TestimonialCirclePara>
        </div>
        <div
          id="testimonial-circle-mid"
          className="testimonial-circle"
          ref={x => (this.mid = x)}
          onMouseOver={midCircAnimIn}
          onMouseOut={midCircAnimOut}
        >
          <TestimonialCircleHeader>Circle Two</TestimonialCircleHeader>
          <TestimonialCirclePara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim, felis orttitor viverra imperdiet, turpis sem sodales
            ligula, ut mattis massa sem et diam.
          </TestimonialCirclePara>
        </div>
        <div
          id="testimonial-circle-right"
          className="testimonial-circle"
          onMouseOver={rightCircAnimIn}
          onMouseOut={rightCircAnimOut}
          ref={x => (this.right = x)}
        >
          <TestimonialCircleHeader>Circle Three</TestimonialCircleHeader>
          <TestimonialCirclePara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            dignissim, felis orttitor viverra imperdiet, turpis sem sodales
            ligula, ut mattis massa sem et diam.
          </TestimonialCirclePara>
        </div>
      </ContainerDiv>
    </Section>
  );
};
