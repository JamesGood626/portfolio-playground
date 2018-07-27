import React from "react";
import styled from "styled-components";
import { FlexColAICenterDiv } from "../../../LayoutStyledComponents";

// THIS IS THE FILE I LEFT OFF IN.

const BlogPostCardContainerDiv = FlexColAICenterDiv.extend`margin-bottom: 8vh;`;

const BlogPostInfoTextContainerDiv = FlexColAICenterDiv.extend`
  padding: 0;
  margin-top: 0;
  padding-top: 1.4vh;
  background: #fcfcfc;
  // This was commented out below so may not be needed.
  margin: 1.4vh 0;
`;

const BlogPostCardLeftContainerDiv = BlogPostCardContainerDiv.extend``;

const renderLeftCard = () => {
  return (
    <div class="blogpost-card-left">
      <div class="blogpost-featured-image">
        "take into account how you'll handle responsive images"
      </div>
      <div class="blogpost-info-text-left">
        <h3>"Header Here"</h3>
        <p>"The content goes here"</p>
      </div>
    </div>
  );
};

const renderRightCard = () => {
  return (
    <div class="blogpost-card-right">
      <div class="blogpost-featured-image">
        "take into account how you'll handle responsive images"
      </div>
      <div class="blogpost-info-text-right">
        <h3>"Header Here"</h3>
        <p>"The content goes here"</p>
      </div>
    </div>
  );
};

const renderCards = () => {};

export const BlogPostCard = () => {
  return <h3>A blog post card!</h3>;
};

/*******************************
******* Blog Post Section ********
*******************************/
// .blogpost-card-left,
// .blogpost-card-right {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   margin-bottom: 8vh;
// }

// .blogpost-info-text-left,
// .blogpost-info-text-right {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   padding: 0;
//   margin-top: 0;
//   padding-top: 1.4vh;
//   background: #fcfcfc;
// }

// .blogpost-info-text-left > h3,
// .blogpost-info-text-right > h3 {
//   margin: 1.4vh 0;
// }

// .blogpost-card-right {
//   align-self: flex-end;
// }

// .blogpost-featured-image {
//   position: relative;
// }

// .blogpost-featured-image::before {
//   content: "";
//   display: block;
//   position: absolute;
//   top: 0;
//   height: 200px;
//   width: 300px;
//   background: rgba(166, 13, 2, 0.4);
// }

// @media (min-width: 768px) {
//   .blogpost-featured-image::before {
//     height: 427px;
//     width: 640px;
//   }

//   .blogpost-card-left,
//   .blogpost-card-right {
//     flex-direction: row;
//     position: relative;
//     margin-bottom: 55vh;
//   }

//   .blogpost-card-right {
//     justify-content: flex-end;
//     margin-bottom: 25vh;
//   }

//   .blogpost-info-text-left,
//   .blogpost-info-text-right {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     height: 360px;
//     width: 590px;
//     padding-top: 1.6vh;
//     box-shadow: 0px 4px 30px -4px #555;
//     background: #fcfcfc;
//   }

//   .blogpost-info-text-left > p,
//   .blogpost-info-text-right > p {
//     margin-bottom: 2vh;
//   }

//   .blogpost-info-text-left > h3,
//   .blogpost-info-text-right > h3 {
//     margin: 1.6vh 0;
//   }

//   .blogpost-info-text-left {
//     position: absolute;
//     top: 25%;
//     left: 13%;
//   }

//   .blogpost-info-text-right {
//     position: absolute;
//     top: -25%;
//     left: -8.5%;
//   }
// }

// @media (min-width: 1024px) {
//   .blogpost-info-text-left {
//     left: 20%;
//   }

//   .blogpost-info-text-right {
//     left: -20%;
//   }
// }
