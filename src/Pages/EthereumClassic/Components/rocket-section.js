import React from "react";
import styled from "styled-components";
import rocket from "../assets/rocket.svg";

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  /* flex-wrap: wrap; */
  width: 100%;
  height: 20rem;
  border: 2px solid #fff;
  margin-top: ${props => props.theme.sectionMargin};
  margin-bottom: ${props => props.theme.sectionMargin};

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    height: 14rem;
    min-width: 14rem;
    width: 70%;
    max-width: 52rem;
    border: 2px solid #34e;
  }

  div h3 {
    font-size: 2rem;
    font-family: ${props => props.theme.headerFont};
    font-weight: 400;
    color: ${props => props.theme.primaryWhite};
  }

  div p {
    width: 90%;
    text-align: right;
    color: ${props => props.theme.primaryGrey};
    border: 2px solid #d40;
  }

  img {
    border: 2px solid lime;
  }

  .green-emphasis {
    color: ${props => props.theme.primaryColor};
  }

  /* Switch back to flex: row */
  @media screen and (min-width: 960px) {
    background: orange;
  }
`;

export default function rocketSection() {
  return (
    <Container>
      <img src={rocket} />
      <div>
        <h3>
          Get started with <span class="green-emphasis">Ethereum</span> Classic
        </h3>
        <p>
          Whether you're looking for wallets, exchanges or even just general
          information, we have you covered. Check out our resources page to be
          directed to the right place you're searching for.
        </p>
        <button>Resources</button>
      </div>
    </Container>
  );
}
