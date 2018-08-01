import React from "react";
import styled from "styled-components";
import "../Styles/main.css";
import headerImage640W from "../Images/640W-cccwc.png";
import headerImage768W from "../Images/768W-cccwc.png";
import headerImage1024W from "../Images/1024W-cccwc.png";
import headerImage1366W from "../Images/1366W-cccwc.png";
import headerImage1600W from "../Images/1600W-cccwc.png";
import headerImage1920W from "../Images/1920W-cccwc.png";

// srcset won't work when utilizing styled components
// const Image = styled.img`
//   height: 100vh;
//   width: 100%;
//   object-fit: cover;
// `;

const ImageOverlay = styled.div`
  position: relative;
  height: auto;
  width: 100vw;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    background: linear-gradient(
      120deg,
      rgba(90, 185, 234, 0.7),
      rgba(136, 96, 208, 0.7)
    );
  }
`;

export const HeaderBackground = ({ children }) => {
  return (
    <ImageOverlay className="header-img-overlay">
      <img
        id="header-image"
        src={`${headerImage640W}`}
        srcSet={`
              ${headerImage1920W} 1920w,
              ${headerImage1600W} 1600w,
              ${headerImage1366W} 1366w,
              ${headerImage1024W} 1024w,
              ${headerImage768W} 768w`}
        sizes="100vw"
        alt="A Window Cleaner Working."
      />
      {children}
    </ImageOverlay>
  );
};

/* height: 3.2rem;
  width: 12rem; */

// .cta-button {

//   height: 50px;
//   width: 250px;
//   font-size: 1.4rem;
//   color: #fcfcfc;
//   background: transparent;
//   border: 2px solid #fcfcfc;
// }

// @media (min-width: 542px) {
//   .cta-button {
//     font-size: 1rem;
//     height: 60px;
//     width: 260px;
//   }
// }

// @media (min-width: 542px) {
//   .header-headline-text {
//     font-size: 2.7rem;
//   }
// }

// .header-headline-text {
//     font-size: 2.3rem;
//     margin-bottom: 2.4rem;
//     color: #fcfcfc;
// }

// @media(min-width: 542px) {
//     .header-headline-text {
//         font-size: 4rem;
//     }
// }

// @media(min-width: 1024px) {
//     .header-headline-text {
//         font-size: 6rem;
//     }
// }
