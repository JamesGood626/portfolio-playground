import React from "react";
import styled from "styled-components";
import outsideBeam from "../assets/outside_beam.svg";
import insideBeam from "../assets/inside_beam.svg";
import leftIntroIcon from "../assets/left_intro_icon.svg";
import midIntroIcon from "../assets/mid_intro_icon.svg";
import rightIntroIcon from "../assets/right_intro_icon.svg";

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${props => props.theme.sectionMargin};

  #heading-titles {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: ${props => props.theme.headerFont};
    color: ${props => props.theme.primaryWhite};
    margin-bottom: ${props => props.theme.sectionMargin};
  }

  #heading-titles h1 {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    /* background: lime;
    width: 100%; */
  }

  .green-emphasis {
    color: ${props => props.theme.primaryColor};
  }

  .white-emphasisis {
    color: ${props => props.theme.primaryWhite};
  }

  #heading-titles h2 {
    position: relative;
    margin-top: -0.6rem;
    color: ${props => props.theme.primaryColor};
  }

  #heading-titles h1 span {
    margin-right: 0.6rem;
  }

  #heading-info-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin-top: ${props => props.theme.sectionMargin};
    margin-bottom: ${props => props.theme.sectionMargin};
  }

  .heading-info {
    display: flex;
    flex-direction: column;
    min-width: 18rem;
    width: 80%;
    max-width: 22rem;
    color: ${props => props.theme.primaryWhite};
    margin-left: 1rem;
    margin-right: 1rem;
  }

  .heading-info h3 {
    position: relative;
    margin-top: ${props => props.theme.sectionMargin};
  }

  .heading-info p {
    color: ${props => props.theme.primaryGrey};
    margin-top: 3.2rem;
    margin-bottom: ${props => props.theme.sectionMargin};
    line-height: 1.2rem;
  }

  .heading-info p:nth-child(3) {
    margin-top: 0.2rem;
  }

  #first-heading-info:before {
    content: "";
    width: 12rem;
    height: 2rem;
    background: url(${outsideBeam});
    background-repeat: no-repeat;
    background-size: cover cover;
    position: absolute;
    top: 1.6em;
    left: -2rem;
  }

  #second-heading-info:before {
    content: "";
    width: 20rem;
    height: 2rem;
    background: url(${insideBeam});
    background-repeat: no-repeat;
    background-size: cover cover;
    position: absolute;
    top: 1.6em;
    right: -1rem;
  }

  #third-heading-info:before {
    content: "";
    width: 12rem;
    height: 2rem;
    background: url(${outsideBeam});
    background-repeat: no-repeat;
    background-size: cover cover;
    position: absolute;
    top: 1.6em;
    right: 1.4rem;
  }

  #sub-heading-info-container {
    display: flex;
    align-items: flex-start;
    margin-top: ${props => props.theme.sectionMargin};
    margin-bottom: ${props => props.theme.sectionMargin};
    height: 10rem;
    width: 80%;
    color: ${props => props.theme.primaryGrey};
  }

  .sub-heading-info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100%;
    width: 100%;
  }

  .sub-heading-info p {
    width: 80%;
    text-align: center;
  }

  .sub-heading-info-icon {
    position: relative;
    width: 7rem;
    height: 7rem;
  }

  #first-sub-heading-info-icon:before {
    content: "";
    width: 100%;
    height: 100%;
    background: url(${leftIntroIcon});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
  }

  #second-sub-heading-info-icon:before {
    content: "";
    width: 100%;
    height: 100%;
    background: url(${midIntroIcon});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
  }

  #third-sub-heading-info-icon:before {
    content: "";
    width: 100%;
    height: 100%;
    background: url(${rightIntroIcon});
    background-repeat: no-repeat;
    background-size: contain;
    position: absolute;
    top: 0;
    left: 0;
  }

  @media (min-width: 460px) {
    /* insideBeam position changes as screen size gets smaller */
    #second-heading-info:before {
      right: 3rem;
    }
  }
`;

export default function heading() {
  return (
    <Container>
      <div id="heading-titles">
        <h1>
          <span>Decentralized. </span> <span>Immutable. </span>{" "}
          <span> Unstoppable.</span>
        </h1>
        <h2>Govern yourself.</h2>
      </div>
      <div id="heading-info-container">
        <div class="heading-info">
          <h3 id="first-heading-info">What is a blockchain?</h3>
          <p>
            Put simply, blockchains provide a way to keep track of digital
            assets (money, things) without the need for intermediaries, such as
            banks and other financial institutions.
          </p>
        </div>
        <div class="heading-info">
          <h3 id="second-heading-info">
            What is <span class="green-emphasis">Ethereum </span>Classic?
          </h3>
          <p>
            Ethereum Classic (ETCH) is a smarter blockchain, it is a network, a
            community, and a cryptocurrency that takes digital assets further.
            In addition to allowing people to send value to each other, ETC
            allows for complex contracts that operate autonomously and cannot be
            modified or censored.
          </p>
          <p>
            This may be best explained with an analogy, imagine Bitcoin as a
            landline phone--it does one thing very well. ETC is like a
            smartphone--itcan do everything Bitcoin can and much more.
          </p>
        </div>
        <div class="heading-info">
          <h3 id="third-heading-info">More than just a blockchain.</h3>
          <p>
            If the internet was simply a bunch of interconnected computers, and
            didn't have any users or creators making websites, it would be
            largely useless. In much the same way a blockchain needs users and
            creators. ETC has both and we're working on solving real world
            problems of interconnecting people and their devices.
          </p>
        </div>
      </div>
      <div id="sub-heading-info-container">
        <div class="sub-heading-info">
          <div id="first-sub-heading-info-icon" class="sub-heading-info-icon" />
          <p>
            <span class="white-emphasisis">Open</span> and welcoming community
          </p>
        </div>
        <div class="sub-heading-info">
          <div
            id="second-sub-heading-info-icon"
            class="sub-heading-info-icon"
          />
          <p>
            Long history of{" "}
            <span class="white-emphasisis">reliable operation</span>
          </p>
        </div>
        <div class="sub-heading-info">
          <div id="third-sub-heading-info-icon" class="sub-heading-info-icon" />
          <p>
            Your<span class="green-emphasisis">ETC</span> is{" "}
            <span class="white-emphasisis">yours forever</span>
          </p>
        </div>
      </div>
    </Container>
  );
}
