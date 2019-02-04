import React from "react";
import styled from "styled-components";
import linesquare from "../assets/line_square.svg";
import gridContentArr from "../config/contentConfig";

const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(7, max-content);
  grid-template-rows: repeat(5, max-content);
  grid-gap: 1rem;
  width: 95vw;
  height: 100%;
  grid-template-areas:
    "works one three three four six nine"
    "works one three three four six nine"
    "works two three three four seven ten"
    "works two three three four seven ten"
    "works two three three five eight eight"
    "works two three three five eight eight";

  img {
    height: auto;
    object-fit: cover;
    margin-top: 0.4rem;
  }

  #architecture {
    width: 330px;
  }

  #architecture-two {
    width: 350px;
  }

  #architecture-three {
    width: 340px;
  }

  .clip-img {
    height: 135px;
    width: 100%;
    overflow: hidden;
  }

  #small-post-container {
    width: 9rem;
    height: 10rem;
  }
  #second-post-container {
    width: 9rem;
    height: 20rem;
  }
  #second-post-container > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  #fourth-post-container {
    width: 9rem;
  }
  #third-post-container {
    height: 33.3rem;
  }
  #eighth-post-container {
    height: 10rem;
  }

  .post-one {
    grid-area: one;
  }
  .post-two {
    grid-area: two;
  }
  .post-three {
    grid-area: three;
  }
  .post-four {
    grid-area: four;
  }
  .post-five {
    grid-area: five;
  }
  .post-six {
    grid-area: six;
  }
  .post-seven {
    grid-area: seven;
  }
  .post-eight {
    grid-area: eight;
  }
  .post-nine {
    grid-area: nine;
  }
  .post-ten {
    grid-area: ten;
  }

  .post-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 0.4rem solid #222;
    margin-top: 0.3rem;
  }

  .post-container:hover {
    border-top: 0.4rem solid #ff530d;
    h3 {
      color: #ff530d;
    }
    p {
      color: #787878;
    }
  }

  .flex-col-header {
    display: flex;
    flex-direction: column;
    margin-top: 0.4rem;
  }

  .flex-row-header {
    display: flex;
    justify-content: space-between;
  }

  .big-num {
    font-size: 4.8rem;
  }

  .big-num-sidetitle {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  .small-post-headernum {
    font-size: 2.2rem;
  }
  .small-post-headertitle {
    margin-top: -0.4rem;
    font-size: 1.2rem;
  }

  .post-text {
    font-size: 0.7rem;
  }

  .right-align {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .post-paratext {
    font-size: 0.8rem;
    font-weight: 600;
  }
`;

const WorksContainer = styled.div`
  grid-area: works;
  width: 17.5rem;
  margin-right: 2.4rem;

  &:before {
    content: "";
    position: absolute;
    width: 9rem;
    height: 0.5;
    border-top: 0.5rem solid #ff530d;
  }

  #works-header {
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotateZ(180deg);
    font-size: 5.4rem;
    color: #ff530d;
    margin-top: 2.2rem;
    margin-left: 0.4rem;
  }

  #linesquare {
    width: 280px;
  }

  #linesquare-div {
    position: absolute;
    top: 19.6rem;
    z-index: -50;
  }
`;

const Works = () => (
  <WorksContainer id="works-div" class="top-border-div">
    <h1 id="works-header">Works</h1>
    <div id="linesquare-div">
      <img id="linesquare" src={linesquare} />
    </div>
  </WorksContainer>
);

const Image = ({ id, classList, img }) => (
  <div id={id} class={classList}>
    <img id={img.id} src={img.src} />
  </div>
);

const SmallPost = ({ data }) => (
  <div id="small-post-container" class={`post-container ${data.id}`}>
    <h3 class="flex-col-header">
      <span class="small-post-headernum">{data.postNum}</span>
      <span class="small-post-headertitle">{data.title}</span>
    </h3>
    <div class="post-text">
      <p class="post-paratext">{data.paraText}</p>
      <p>{data.dateText}</p>
    </div>
  </div>
);

const SecondPost = ({ data }) => (
  <div id="second-post-container" class={`post-container ${data.id}`}>
    <Image id="second-post-img" classList="clip-img" img={data.img} />
    <div>
      <h3 class="flex-col-header">
        <span class="small-post-headernum">{data.postNum}</span>
        <span class="small-post-headertitle">{data.title}</span>
      </h3>
      <div class="post-text">
        <p class="post-paratext">{data.paraText}</p>
        <p>{data.dateText}</p>
      </div>
    </div>
  </div>
);

const ThirdPost = ({ data }) => (
  <div id="third-post-container" class={`post-container ${data.id}`}>
    <h3 class="flex-row-header">
      <span class="big-num">{data.postNum}</span>
      <span class="big-num-sidetitle">{data.title}</span>
    </h3>
    <div>
      <div class="post-text right-align">
        <p class="post-paratext">{data.paraText}</p>
        <p>{data.dateText}</p>
      </div>
      <Image id="third-post-img" img={data.img} />
    </div>
  </div>
);

const FourthPost = ({ data }) => (
  <div id="fourth-post-container" class={`post-container ${data.id}`}>
    <h3 class="flex-col-header">
      <span class="small-post-headernum">{data.postNum}</span>
      <span class="small-post-headertitle">{data.title}</span>
    </h3>
    <div>
      <div class="post-text">
        <p class="post-paratext">{data.paraText}</p>
        <p>{data.dateText}</p>
      </div>
      <Image id="fourth-post-img" classList="clip-img" img={data.img} />
    </div>
  </div>
);

const EighthPost = ({ data }) => (
  <div id="eighth-post-container" class={`post-container ${data.id}`}>
    <h3 class="flex-row-header">
      <span class="big-num">{data.postNum}</span>
      <span class="big-num-sidetitle">{data.title}</span>
    </h3>
    <div class="post-text right-align">
      <p class="post-paratext">{data.paraText}</p>
      <p>{data.dateText}</p>
    </div>
  </div>
);

const renderPosts = arr => {
  return arr.map(data => {
    if (data.postNum === "01") {
      return <SmallPost data={data} />;
    }
    if (data.postNum === "05") {
      return <SmallPost data={data} />;
    }
    if (data.postNum === "06") {
      return <SmallPost data={data} />;
    }
    if (data.postNum === "07") {
      return <SmallPost data={data} />;
    }
    if (data.postNum === "09") {
      return <SmallPost data={data} />;
    }
    if (data.postNum === "10") {
      return <SmallPost data={data} />;
    }
    if (data.postNum === "02") {
      return <SecondPost data={data} />;
    }
    if (data.postNum === "03") {
      return <ThirdPost data={data} />;
    }
    if (data.postNum === "04") {
      return <FourthPost data={data} />;
    }
    if (data.postNum === "08") {
      return <EighthPost data={data} />;
    }
  });
};

export default function gridTwo() {
  return (
    <GridContainer>
      <Works />
      {renderPosts(gridContentArr)}
    </GridContainer>
  );
}
