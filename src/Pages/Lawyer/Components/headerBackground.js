import React from "react";
import styled from "styled-components";

import headerImage640W from "../images/640W-header-img.png";
import headerImage768W from "../images/768W-header-img.png";
import headerImage1024W from "../images/1024W-header-img.png";
import headerImage1366W from "../images/1366W-header-img.png";
import headerImage1600W from "../images/1600W-header-img.png";
// import headerImage1920W from "../images/1920W-header-img.png";

const Image = styled.img`
  @media (max-width: 610px) {
    height: 100vh;
    width: 100%;
    object-fit: cover;
  }
`;

const ImageOverlay = styled.div`
  position: relative;
  height: auto;
  width: 100vw;
  overflow: hidden;

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    opacity: 0.7;
    background: #292929;
  }
`;

export const HeaderBackground = ({ children }) => {
  return (
    <ImageOverlay className="header-img-overlay">
      <Image
        id="header-image"
        src={`${headerImage640W}`}
        srcSet={`
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
