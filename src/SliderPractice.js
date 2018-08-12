import React, { Component } from "react";
//import styled from "styled-components";
import "./Pages/WindowCleaning/Styles/main.css";

// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   height: 100vh;
//   width: 100vw;
//   overflow: hidden;
// `;

// const Slider = styled.div`
//   width: 80vw;
//   height: 60vh;
//   display: flex;
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;

//   -webkit-scroll-snap-points-x: repeat(80vw);
//   -ms-scroll-snap-points-x: repeat(80vw);
//   scroll-snap-points-x: repeat(80vw);
//   -webkit-scroll-snap-type: mandatory;
//   -ms-scroll-snap-type: mandatory;
//   scroll-snap-type: mandatory;
// `;

// const Slide = styled.div`
//   width: 80vw;
//   flex-shrink: 0;
//   height: 100%;
//   scroll-behavior: smooth;
// `;

// const TestimonialCircleHeader = styled.h3`
//   margin: 1rem 0;
//   line-height: ${props => props.theme.headerLineHeight}
//   letter-spacing: ${props => props.theme.headerLetterSpacing}
//   color: ${props => props.theme.paraColor}
//   font-size: ${props => props.theme.testimonialCircleHeaderFontSize};
//   font-family: ${props => props.theme.mainFont};

//   @media (min-width: 752px) {
//     font-size: ${props => props.theme.testimonialCircleHeaderFontSize752W};
//   }
// `;

// const TestimonialCirclePara = styled.p`
//   width: 68%;
//   text-align: center;
//   color: ${props => props.theme.paraColor}
//   line-height: ${props => props.theme.paraLineHeight}
//   letter-spacing: ${props => props.theme.paraLetterSpacing}
//   font-size: ${props => props.theme.paraFontSize};
//   font-family: ${props => props.theme.mainFont};

//   @media (min-width: 752px) {
//     font-size: ${props => props.theme.paraFontSize752W}
//   }
// `;

// export default class SliderPractice extends Component {
// handleClick = e => {
//   console.log("preventing default");
//   e.preventDefault();
// };
//   render() {
//     return (
//       <Container>
//         <Slider>
//           <Slide id="rightCirc" className="leftCircle100VW-container">
//             <div
//               id="testimonial-circle-left"
//               className="testimonial-circle"
//               // onMouseOver={this.leftCircHoverOver}
//               // onMouseOut={this.leftCircHoverOut}
//               ref={x => (this.left = x)}
//               // style={showSlider ? posRelative : null}
//             >
//               <TestimonialCircleHeader>Janet Janson</TestimonialCircleHeader>
//               <TestimonialCirclePara>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Curabitur dignissim, felis orttitor viverra imperdiet, turpis
//                 sem sodales ligula, ut mattis massa sem et diam.
//               </TestimonialCirclePara>
//             </div>
//           </Slide>
//           <Slide id="midCirc" className="midCircle100VW-container">
//             <div
//               id="testimonial-circle-left"
//               className="testimonial-circle"
//               // onMouseOver={this.leftCircHoverOver}
//               // onMouseOut={this.leftCircHoverOut}
//               ref={x => (this.left = x)}
//               // style={showSlider ? posRelative : null}
//             >
//               <TestimonialCircleHeader>John Hayworthy</TestimonialCircleHeader>
//               <TestimonialCirclePara>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Curabitur dignissim, felis orttitor viverra imperdiet, turpis
//                 sem sodales ligula, ut mattis massa sem et diam.
//               </TestimonialCirclePara>
//             </div>
//           </Slide>
//           <Slide id="leftCirc" className="rightCircle100VW-container">
//             <div
//               id="testimonial-circle-left"
//               className="testimonial-circle"
//               // onMouseOver={this.leftCircHoverOver}
//               // onMouseOut={this.leftCircHoverOut}
//               ref={x => (this.left = x)}
//               // style={showSlider ? posRelative : null}
//             >
//               <TestimonialCircleHeader>Buck Gordon</TestimonialCircleHeader>
//               <TestimonialCirclePara>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                 Curabitur dignissim, felis orttitor viverra imperdiet, turpis
//                 sem sodales ligula, ut mattis massa sem et diam.
//               </TestimonialCirclePara>
//             </div>
//           </Slide>
//         </Slider>
//         <a href="#leftCirc" onClick={this.handleClick}>
//           Left
//         </a>
//         <a href="#midCirc" onClick={this.handleClick}>
//           Mid
//         </a>
//         <a href="#rightCirc" onClick={this.handleClick}>
//           Right
//         </a>
//       </Container>
//     );
//   }
// }

// {
//   /* <Slider>
//   <Slide id="slide-1">1</Slide>
//   <Slide id="slide-2">2</Slide>
//   <Slide id="slide-3">3</Slide>
// </Slider> */
// }

// const Slider = styled.div`
//   width: 300px;
//   height: 300px;
//   display: flex;
//   overflow-x: auto;
//   -webkit-overflow-scrolling: touch;
//   -webkit-scroll-snap-points-x: repeat(300px);
//   -ms-scroll-snap-points-x: repeat(300px);
//   scroll-snap-points-x: repeat(300px);
//   -webkit-scroll-snap-type: mandatory;
//   -ms-scroll-snap-type: mandatory;
//   scroll-snap-type: mandatory;
// `;

// const Slide = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   font-size: 2rem;
//   color: #fcfcfc;
//   width: 300px;
//   flex-shrink: 0;
//   height: 100%;
//   background: #e04;
// `;

export default class SliderPractice extends Component {
  handleClick = e => {
    console.log("preventing default");
    e.preventDefault();
  };
  render() {
    return (
      <div class="slide-wrap">
        <a href="#slide-1">1</a>
        <a href="#slide-2">2</a>
        <a href="#slide-3" onClick={this.handleClick}>
          3
        </a>
        <a href="#slide-4" onClick={this.handleClick}>
          4
        </a>
        <a href="#slide-5" onClick={this.handleClick}>
          5
        </a>

        <div class="slider">
          <div class="slide" id="slide-1">
            1
          </div>
          <div class="slide" id="slide-2">
            2
          </div>
          <div class="slide" id="slide-3">
            3
          </div>
          <div class="slide" id="slide-4">
            4
          </div>
          <div class="slide" id="slide-5">
            5
          </div>
        </div>
      </div>
    );
  }
}
