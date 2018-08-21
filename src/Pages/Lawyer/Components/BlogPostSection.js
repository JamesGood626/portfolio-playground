import React from "react";
// import styled from "styled-components";
import { BlogPostCards } from "./BlogPostCard";
import { FlexCol } from "../../../LayoutStyledComponents";

const BlogPostContainerSection = FlexCol.extend`
  width: 100%;
`;

const BlogPostInnerContainerDiv = FlexCol.extend`
  align-items: center;
  align-self: center;
  width: 90%;
  margin-top: 10vh;

  & > h2 {
    font-family: ${props => props.theme.mainFont};
    font-size: ${props => props.theme.headerLevelTwoFontSize};
  }

  @media (min-width: 500px) {
    & > h2 {
      font-size: ${props => props.theme.headerLevelTwoFontSize500W};
    }
  }
`;

const BlogPostCardContainerDiv = FlexCol.extend`
  height: auto;
  width: 100%;
  margin-top: 8vh;
`;

export const BlogPostSection = () => {
  return (
    <BlogPostContainerSection>
      <BlogPostInnerContainerDiv>
        <h2>Recent Posts</h2>
        <BlogPostCardContainerDiv>
          <BlogPostCards />
        </BlogPostCardContainerDiv>
      </BlogPostInnerContainerDiv>
    </BlogPostContainerSection>
  );
};
