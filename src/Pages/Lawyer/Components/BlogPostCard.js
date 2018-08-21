import React from "react";
import styled from "styled-components";
import { blogPostConfig } from "../Config/blogPostConfig";
import { FlexColAICenterDiv } from "../../../LayoutStyledComponents";

import postOne500W from "../images/500W-post-one.png";
import postOne640W from "../images/640W-post-one.png";
import postOne768W from "../images/768W-post-one.png";
import postTwo500W from "../images/500W-post-two.png";
import postTwo640W from "../images/640W-post-two.png";
import postTwo768W from "../images/768W-post-two.png";
import postThree500W from "../images/500W-post-three.png";
import postThree640W from "../images/640W-post-three.png";
import postThree768W from "../images/768W-post-three.png";
import postFour500W from "../images/500W-post-four.png";
import postFour640W from "../images/640W-post-four.png";
import postFour768W from "../images/768W-post-four.png";

const postOneImgArr = [postOne500W, postOne640W, postOne768W];
const postTwoImgArr = [postTwo500W, postTwo640W, postTwo768W];
const postThreeImgArr = [postThree500W, postThree640W, postThree768W];
const postFourImgArr = [postFour500W, postFour640W, postFour768W];

const BlogPostCardContainerDiv = FlexColAICenterDiv.extend`
  margin-bottom: 8vh;
  @media (min-width: 768px) {
    flex-direction: row;
    position: relative;
    margin-bottom: 30vh;
  }
`;

const BlogPostInfoTextContainerDiv = FlexColAICenterDiv.extend`
  padding: 0;
  margin-top: 0;
  padding-top: 1.4vh;
  padding-bottom: 1.4vh;
  background: #fcfcfc;
  // This was commented out below so may not be needed.
  // margin: 1.4vh 0;
  & > h3 {
    font-family: ${props => props.theme.mainFont};
    font-size: ${props => props.theme.cardHeaderFontSize};
    margin: 1.4vh 0;
  }

  & > p {
    font-family: ${props => props.theme.secondaryFont};
    font-size: ${props => props.theme.paraFontSize};
  }

  @media (min-width: 500px) {
    & > h3 {
      font-size: ${props => props.theme.cardHeaderFontSize500W};
    }
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

/**********************************/
// const BlogPostImageContainerDiv = styled.div`
//   position: relative;

//   &:before {
//     content: "";
//     display: block;
//     position: absolute;
//     top: 0;
//     height: 200px;
//     width: 300px;
//     background: rgba(166, 13, 2, 0.4);
//   }

//   @media (min-width: 768px) {
//     &:before {
//       height: 427px;
//       width: 640px;
//     }
//   }
// `;

const ImageContainer = styled.div`
  position: relative;
  height: 200px;
  width: 300px;
  overflow: hidden;

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
    height: 427px;
    width: 640px;

    &:before {
      height: 427px;
      width: 640px;
    }
  }
`;

const Image = styled.img`
  width: 100%;
`;

/**********************************/
const BlogPostInfoTextLeftContainerDiv = BlogPostInfoTextContainerDiv.extend`
  & > p {
    width: 80%;
    line-height: ${props => props.theme.paraLineHeight};
    letter-spacing: ${props => props.theme.paraLetterSpacing};
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 32%;
    left: 20%;
  }
`;

// Gonna have to play around with these left values once I have the image in.
const BlogPostInfoTextRightContainerDiv = BlogPostInfoTextContainerDiv.extend`
  & > p {
    width: 80%;
    line-height: ${props => props.theme.paraLineHeight};
    letter-spacing: ${props => props.theme.paraLetterSpacing};
  }

  @media (min-width: 768px) {
    position: absolute;
    top: 35%;
    left: -12.5%;
  }
`;

const BlogPostCardLeftContainerDiv = BlogPostCardContainerDiv.extend`
  align-self: flex-start;
`;

const BlogPostCardRightContainerDiv = BlogPostCardContainerDiv.extend`
  align-self: flex-end;
`;

const renderLeftCard = (header, content, imgArr) => {
  return (
    <BlogPostCardLeftContainerDiv>
      <ImageContainer>
        <Image
          id="header-image"
          src={`${imgArr[0]}`}
          srcSet={`
          ${imgArr[1]} 640w,
          ${imgArr[2]} 768w
        `}
          sizes="100vw"
          alt="Grand imagery"
        />
      </ImageContainer>
      <BlogPostInfoTextLeftContainerDiv>
        <h3>{header}</h3>
        <p>{content}</p>
      </BlogPostInfoTextLeftContainerDiv>
    </BlogPostCardLeftContainerDiv>
  );
};

const renderRightCard = (header, content, imgArr) => {
  return (
    <BlogPostCardRightContainerDiv>
      <ImageContainer>
        <Image
          id="header-image"
          src={`${imgArr[0]}`}
          srcSet={`
          ${imgArr[1]} 640w,
          ${imgArr[2]} 768w
        `}
          sizes="100vw"
          alt="Slightly grander imagery."
        />
      </ImageContainer>
      <BlogPostInfoTextRightContainerDiv>
        <h3>{header}</h3>
        <p>{content}</p>
      </BlogPostInfoTextRightContainerDiv>
    </BlogPostCardRightContainerDiv>
  );
};

const renderCards = config => {
  return config.map((post, i) => {
    const iPlusOne = i + 1;
    if (iPlusOne % 2 === 0) {
      return iPlusOne === 2
        ? renderRightCard(post.header, post.paragraph, postTwoImgArr)
        : renderRightCard(post.header, post.paragraph, postFourImgArr);
    } else {
      return iPlusOne === 1
        ? renderLeftCard(post.header, post.paragraph, postOneImgArr)
        : renderLeftCard(post.header, post.paragraph, postThreeImgArr);
    }
  });
};

export const BlogPostCards = () => {
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
