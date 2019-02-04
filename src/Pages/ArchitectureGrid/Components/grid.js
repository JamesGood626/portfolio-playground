import React from "react";
import styled from "styled-components";
import linesquare from "../assets/line_square.svg";
import architecture from "../assets/architecture_w800px.png";
import architectureTwo from "../assets/architecture2_w500px.png";
import architectureThree from "../assets/architecture3_w560px.png";

// Looking back on this, before I've even finished... I should have just made the 3-4 components for each div containing the text content
// with their required styles built in, instead of doing all this conditional stuff to style... And just rendered each div with it's
const GridContainer = styled.section`
  display: grid;
  width: 94.7vw;

  /* background: orange; */

  .top-border-div {
    position: relative;
  }

  /* Expands one column images to align with top border */
  .top-border-div div {
    width: 100%;
  }

  .red {
    border-top: 0.5rem solid #ff530d;
    width: 50%;
  }

  .black {
    border-top: 0.5rem solid #222;
  }

  .black:hover {
    border-top: 0.5rem solid #ff530d;
  }

  #works-header {
    writing-mode: vertical-rl;
    text-orientation: sideways;
    transform: rotateZ(180deg);
    font-size: 5.4rem;
    color: #ff530d;
    margin-top: 1rem;
    margin-left: 1rem;
  }

  #linesquare {
    width: 280px;
  }

  #linesquare-div {
    position: absolute;
    top: 12.4rem;
    z-index: -50;
  }

  img {
    height: auto;
    object-fit: cover;
  }

  #architecture {
    width: 100%;
  }

  #architecture-two {
    width: 350px;
  }

  #architecture-three {
    width: 340px;
  }

  .clip-img {
    height: 135px;
    width: 150px;
    overflow: hidden;
    background: blue;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(min-content, max-content));
    grid-template-rows: repeat(9, 1fr);
    grid-auto-rows: auto;
    justify-items: stretch;
    align-items: stretch;
    grid-gap: 0.6rem;
    grid-template-areas:
      "works works one three three four six nine"
      "works works one three three four six nine"
      "works works two three three four six nine"
      "works works two three three four seven ten"
      "works works two three three five seven ten"
      "works works two three three five eight eight"
      ". . . . . . eight eight"
      ". . . . . . . ."
      ". . . . . . . .";

    #works-div {
      grid-area: works;
      width: 18rem;
    }

    .post {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .post-text-content {
      height: 100%;
      background: lime;
      padding: 0;
    }

    .align-content-right {
      align-items: flex-end;
    }

    .post-col-span-sm {
      max-width: 12.5rem;
    }

    .post-col-span-lrg {
      max-width: 22rem;
    }

    .post-row-span-sm {
      height: 100%;
    }
    .post-row-span-med {
      height: 100%;
    }
    .post-row-span-lrg {
      height: 100%;
    }

    #post-one {
      grid-area: one;
    }
    #post-two {
      grid-area: two;
      justify-content: flex-start;
    }
    #post-three {
      grid-area: three;
      align-self: auto;
    }
    #post-four {
      grid-area: four;
    }
    #post-five {
      grid-area: five;
    }
    #post-six {
      grid-area: six;
    }
    #post-seven {
      grid-area: seven;
    }
    #post-eight {
      grid-area: eight;
    }
    #post-nine {
      grid-area: nine;
    }
    #post-ten {
      grid-area: ten;
    }

    #normsize-num {
      font-size: 2.2rem;
    }

    #supersize-num {
      display: flex;
      background: blue;
      padding: 0;
      font-size: 5rem;
    }

    .supersize-num-text-content {
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding-left: 0.2rem;
      /* margin-top: 0.6rem; */
    }

    .post-heading > span {
      font-size: 1.1rem;
    }
  }
`;

const gridContentArr = [
  {
    id: "post-one",
    postNum: "01",
    title: "Acorda Cafe",
    paraText: "Workplace",
    dateText: "unreadable",
    colSpan: "sm",
    rowSpan: "sm"
  },
  {
    id: "post-two",
    postNum: "02",
    title: "Today Show",
    paraText: "Media & Entertainment",
    dateText: "unreadable",
    img: { id: "architecture-two", src: architectureTwo, position: "top" },
    colSpan: "sm",
    rowSpan: "med"
  },
  {
    id: "post-three",
    postNum: "03",
    title: "Hybrid Therapeutics",
    paraText: "Science & Technology",
    dateText: "unreadable",
    img: { id: "architecture", src: architecture, position: "bottom" },
    colSpan: "lrg",
    rowSpan: "lrg"
  },
  {
    id: "post-four",
    postNum: "04",
    title: "Scor Chicago",
    paraText: "Workplace",
    dateText: "unreadable",
    img: {
      id: "architecture-three",
      src: architectureThree,
      position: "bottom"
    },
    colSpan: "sm",
    rowSpan: "med"
  },
  {
    id: "post-five",
    postNum: "05",
    title: "Today Show",
    paraText: "Workplace",
    dateText: "unreadable",
    colSpan: "sm",
    rowSpan: "sm"
  },
  {
    id: "post-six",
    postNum: "06",
    title: "Today Show",
    paraText: "Workplace",
    dateText: "unreadable",
    colSpan: "sm",
    rowSpan: "sm"
  },
  {
    id: "post-seven",
    postNum: "07",
    title: "Today Show",
    paraText: "Workplace",
    dateText: "unreadable",
    colSpan: "sm",
    rowSpan: "sm"
  },
  {
    id: "post-eight",
    postNum: "08",
    title: "CNBC News Bureau",
    paraText: "Workplace",
    dateText: "unreadable",
    colSpan: "lrg",
    rowSpan: "sm"
  },
  {
    id: "post-nine",
    postNum: "09",
    title: "Today Show",
    paraText: "Workplace",
    dateText: "unreadable",
    colSpan: "sm",
    rowSpan: "sm"
  },
  {
    id: "post-ten",
    postNum: "10",
    title: "Today Show",
    paraText: "Workplace",
    dateText: "unreadable",
    colSpan: "sm",
    rowSpan: "sm"
  }
];

const renderGridContent = arr => {
  return arr.map(content => {
    const { postNum, img, colSpan, rowSpan } = content;
    const postNumSize =
      postNum === "08" || postNum === "03" ? "supersize-num" : "normsize-num";
    const classList = colSpan === "sm" ? "clip-img" : null;
    return (
      <div
        id={content.id}
        class={`post top-border-div black post-col-span-${colSpan} post-row-span-${rowSpan}`}
      >
        {img && img.position === "top" ? (
          <Image classList={classList} img={content.img} />
        ) : null}
        <PostContent postNumSize={postNumSize} content={content} />
        {img && img.position === "bottom" ? (
          <Image classList={classList} img={content.img} />
        ) : null}
      </div>
    );
  });
};

const PostContent = ({ postNumSize, content }) => {
  const textContentRightAlign =
    postNumSize === "supersize-num" && "align-content-right";
  const supersizeTextContent =
    postNumSize === "supersize-num" && "supersize-num-text-content";
  return (
    <div class={`post post-text-content ${textContentRightAlign}`}>
      <h3 class={`post-heading ${supersizeTextContent}`}>
        <span id={postNumSize}>{content.postNum}</span>{" "}
        <span>{content.title}</span>
      </h3>
      <p>
        {content.paraText} <span>{content.dateText}</span>
      </p>
    </div>
  );
};

const Image = ({ classList, img }) => (
  <div class={classList}>
    <img id={img.id} src={img.src} />
  </div>
);

export default function grid() {
  return (
    <GridContainer>
      <div id="works-div" class="top-border-div red">
        <h1 id="works-header">Works</h1>
        <div id="linesquare-div">
          <img id="linesquare" src={linesquare} />
        </div>
      </div>
      {renderGridContent(gridContentArr)}
    </GridContainer>
  );
}
