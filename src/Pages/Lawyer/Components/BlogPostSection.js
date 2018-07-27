import React from "react";
import styled from "styled-components";
import { BlogPostCard } from "./BlogPostCard";
import { FlexCol } from "../../../LayoutStyledComponents";

const BlogPostContainerSection = FlexCol.extend`width: 100%;`;

const BlogPostInnerContainerDiv = FlexCol.extend`
  align-items: center;
  align-self: center;
  width: 90%;
  margin-top: 10vh;

  & > h2 {
    font-size: 2rem;
  }
`;

const BlogPostCardContainerDiv = FlexCol.extend`
  height: auto;
  width: 100%;
  margin-top: 4vh;
`;

export const BlogPostSection = () => {
  return (
    <BlogPostContainerSection>
      <BlogPostInnerContainerDiv>
        <h2>Recent Posts</h2>
        <BlogPostCardContainerDiv>
          <BlogPostCard />
        </BlogPostCardContainerDiv>
      </BlogPostInnerContainerDiv>
    </BlogPostContainerSection>
  );
};
