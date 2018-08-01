import React from "react";
import styled from "styled-components";
import { blogPostConfig } from "../Config/blogPostConfig";
import { FlexColAICenterDiv } from "../../../LayoutStyledComponents";

const BlogPostCardContainerDiv = FlexColAICenterDiv.extend`
  margin-bottom: 8vh;
  @media (min-width: 768px) {
    flex-direction: row;
    position: relative;
    margin-bottom: 55vh;
  }
`;

const BlogPostInfoTextContainerDiv = FlexColAICenterDiv.extend`
  padding: 0;
  margin-top: 0;
  padding-top: 1.4vh;
  background: #fcfcfc;
  // This was commented out below so may not be needed.
  // margin: 1.4vh 0;
  & > h3 {
    margin: 1.4vh 0;
  }

  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 360px;
    width: 590px;
    padding-top: 1.6vh;
    box-shadow: 0px 4px 30px -4px #555;
    background: #fcfcfc;

    & > h3 {
      margin: 1.6vh 0;
    }
    & > p {
      margin-bottom: 2vh;
    }
  }
`;

const BlogPostImageContainerDiv = styled.div`
  position: relative;
  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    height: 200px;
    width: 300px;
    background: rgba(166, 13, 2, 0.4);
  }

  @media (min-width: 768px) {
    &:before {
      height: 427px;
      width: 640px;
    }
  }
`;

const BlogPostInfoTextLeftContainerDiv = BlogPostInfoTextContainerDiv.extend`
  @media (min-width: 768px) {
    position: absolute;
    top: 25%;
    left: 13%;
  }

  @media (min-width: 1024px) {
    left: 20%;
  }
`;

// Gonna have to play around with these left values once I have the image in.
const BlogPostInfoTextRightContainerDiv = BlogPostInfoTextContainerDiv.extend`
  @media (min-width: 768px) {
    position: absolute;
    top: -25%;
    left: -8.5%;
  }

  @media (min-width: 1024px) {
    left: -20%;
  }
`;

const BlogPostCardLeftContainerDiv = BlogPostCardContainerDiv.extend``;

const BlogPostCardRightContainerDiv = BlogPostCardContainerDiv.extend`
  align-self: flex-end;
`;

const renderLeftCard = (header, content) => {
  return (
    <BlogPostCardLeftContainerDiv>
      <BlogPostImageContainerDiv>
        "take into account how you'll handle responsive images"
      </BlogPostImageContainerDiv>
      <BlogPostInfoTextLeftContainerDiv>
        <h3>{header}</h3>
        <p>{content}</p>
      </BlogPostInfoTextLeftContainerDiv>
    </BlogPostCardLeftContainerDiv>
  );
};

const renderRightCard = (header, content) => {
  return (
    <BlogPostCardRightContainerDiv>
      <BlogPostImageContainerDiv>
        "take into account how you'll handle responsive images"
      </BlogPostImageContainerDiv>
      <BlogPostInfoTextRightContainerDiv>
        <h3>{header}</h3>
        <p>{content}</p>
      </BlogPostInfoTextRightContainerDiv>
    </BlogPostCardRightContainerDiv>
  );
};

const renderCards = config => {
  console.log("renderCards RUnning");
  return config.map((post, i) => {
    const iPlusOne = i + 1;
    if (iPlusOne % 2 === 0) {
      return renderRightCard(post.header, post.paragraph);
    } else {
      return renderLeftCard(post.header, post.paragraph);
    }
  });
};

export const BlogPostCard = () => {
  return renderCards(blogPostConfig);
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

// .blogpost-card-left,
// .blogpost-card-right {
//   flex-direction: row;
//   position: relative;
//   margin-bottom: 55vh;
// }

//   .blogpost-card-right {
//     justify-content: flex-end;
//     margin-bottom: 25vh;
//   }

// .blogpost-info-text-left,
// .blogpost-info-text-right {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   height: 360px;
//   width: 590px;
//   padding-top: 1.6vh;
//   box-shadow: 0px 4px 30px -4px #555;
//   background: #fcfcfc;
// }

//   .blogpost-info-text-left > p,
//   .blogpost-info-text-right > p {
//     margin-bottom: 2vh;
//   }

//   .blogpost-info-text-left > h3,
//   .blogpost-info-text-right > h3 {
//     margin: 1.6vh 0;
//   }

// .blogpost-info-text-left {
//   position: absolute;
//   top: 25%;
//   left: 13%;
// }

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
