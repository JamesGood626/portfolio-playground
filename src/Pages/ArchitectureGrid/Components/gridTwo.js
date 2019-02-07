import React from "react";
import styled from "styled-components";
import linesquare from "../assets/line_square.svg";
import gridContentArr from "../config/contentConfig";

const GridContainer = styled.section`
  display: grid;
  justify-content: center;
  grid-gap: 1.2rem;
  width: 95vw;
  height: 100%;
  padding-bottom: 2rem;
  grid-template-columns: repeat(2, max-content);
  grid-auto-rows: auto;
  grid-template-areas:
    "works works"
    "works works"
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    ". ."
    "one two"
    ". two"
    "three three"
    "three three"
    "four five"
    "six seven"
    "eight eight"
    "eight eight"
    "nine ten";

  img {
    height: auto;
    object-fit: cover;
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

  .img-margin {
    margin-top: 0.4rem;
    margin-bottom: 0;
    padding-bottom: 0;
  }

  .img-blend {
    position: relative;
  }

  .img-blend:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: red;
    mix-blend-mode: multiply;
  }

  #third-post-img:before {
    height: 97%;
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
    position: relative;
  }

  .post-two {
    grid-area: two;
  }
  .post-three {
    position: relative;
    grid-area: three;
  }

  .post-four {
    position: relative;
    grid-area: four;
  }

  .post-five {
    position: relative;
    grid-area: five;
  }
  .post-six {
    position: relative;
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
    border-top: 0.4rem solid red;
    h3 {
      color: red;
    }
    .img-blend:before {
      background: #787878;
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

  @media screen and (min-width: 560px) and (max-width: 929px) {
    grid-template-columns: repeat(3, max-content);
    grid-auto-rows: auto;
    grid-template-areas:
      "works works one"
      "works works two"
      "works works two"
      "three three four"
      "three three seven"
      "five six nine"
      "eight eight ten"
      "eight eight .";

    .post-one:after {
      content: "";
      position: absolute;
      top: -0.5rem;
      left: -0.7rem;
      width: 0.15rem;
      height: 89.5rem;
      background: rgba(100, 100, 100, 0.12);
    }

    .post-five:after {
      content: "";
      position: absolute;
      top: -0.5rem;
      right: -1rem;
      width: 0.15rem;
      height: 10.1rem;
      background: rgba(100, 100, 100, 0.12);
    }
  }

  @media screen and (min-width: 930px) {
    /* width: 95vw; */
    /* background: lime; */
    grid-template-areas:
      ". works one three three . ."
      ". works two three three . ."
      ". works two three three . ."
      ". . four six nine . ."
      ". . four seven ten . ."
      ". . five eight eight . .";

    .post-one:after {
      content: "";
      position: absolute;
      top: -0.5rem;
      right: -0.7rem;
      width: 0.15rem;
      height: 33.2rem;
      background: rgba(100, 100, 100, 0.12);
    }

    .post-three:after {
      content: "";
      position: absolute;
      top: -0.5rem;
      right: -0.7rem;
      width: 0.15rem;
      height: 33.2rem;
      background: rgba(100, 100, 100, 0.12);
    }

    .post-four:after {
      content: "";
      position: absolute;
      top: -0.5rem;
      right: -0.7rem;
      width: 0.15rem;
      height: 33.2rem;
      background: rgba(100, 100, 100, 0.12);
    }

    .post-six:after {
      content: "";
      position: absolute;
      top: -0.5rem;
      right: -0.7rem;
      width: 0.15rem;
      height: 21.6rem;
      background: rgba(100, 100, 100, 0.12);
    }
  }

  @media screen and (min-width: 1390px) {
    grid-template-columns: repeat(7, max-content);
    grid-template-rows: repeat(5, max-content);
    grid-template-areas:
      "works one three three four six nine"
      "works one three three four six nine"
      "works two three three four seven ten"
      "works two three three four seven ten"
      "works two three three five eight eight"
      "works two three three five eight eight";
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
    border-top: 0.5rem solid red;
  }

  #works-header {
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotateZ(180deg);
    font-size: 5.4rem;
    color: red;
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
  <div id={id} class={`${classList} img-blend img-margin`}>
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
