import React, { Component } from "react";
import styled from "styled-components";
import { TweenMax } from "gsap";
import AnimControls from "../Components/animControls";
import cardsConfig from "../Config";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  min-width: 22rem;
  width: 80%;
  max-width: 38rem;
  min-height: 18rem;
  height: 80%;
  max-height: 34rem;
  padding-top: 2.4rem;
  perspective: 650px;
  // transform: perspective(400px);
`;

const AnimContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 18rem;
  height: 60%;

  @media (max-width: 500px) {
    flex-direction: column;
    min-height: 24rem;
    height: 100%;
  }
`;

const AnimCards = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22rem;
  min-height: 14rem;
  height: 14rem;
  // This is what will be animated when arrows are hovered
  transform: rotateX(60deg);
  transform-style: preserve-3d;
  background: lime;
`;

const CardContainer = styled.div`
  position: absolute;
  width: 20rem;
  height: 12rem;
  background: #fcfcfc;
  box-shadow: 0px 4px 30px -4px #333;
  // transform: translateZ(100px);
  transform: ${props => `translateZ(${props.zPos}px);`};
`;

const card = (cards, distance) => {
  return cards.map((card, i) => (
    <CardContainer zPos={i * distance}>
      <h3>{card.title}</h3>
    </CardContainer>
  ));
};

export default class CardStackAnimator extends Component {
  state = {
    scrollPos: 0,
    topRangeNotToBeExceeded: cardsConfig.length * 80,
    distance: 80,
    yIncrement: 60,
    zIncrement: 40,
    yPosition: 0,
    zPosition: 0
    // Implementation of the pink note.
    // But it needs to gradually decrement the zIncrement instead... because it's being pushed too far out.
  };

  animateUp = () => {
    // To maintain proper perspective:
    // Positive Y
    // Negative Z
    const { yPosition, zPosition, yIncrement, zIncrement } = this.state;
    const yDistance = yPosition + yIncrement;
    const zDistance = zPosition - zIncrement;
    TweenMax.to(this.cardPerspectiveContainer, 0.3, {
      y: yDistance,
      z: zDistance
    });
    this.setState((state, props) => ({
      yPosition: yDistance,
      zPosition: zDistance,
      counter: state.counter++
    }));
  };

  animateDown = () => {
    // To maintain proper perspective:
    // Negative Y
    // Positive Z
    const { yPosition, zPosition, yIncrement, zIncrement } = this.state;
    const yDistance = yPosition - yIncrement;
    const zDistance = zPosition + zIncrement;
    TweenMax.to(this.cardPerspectiveContainer, 0.3, {
      y: yPosition - yIncrement,
      z: zDistance
    });
    this.setState((state, props) => ({
      yPosition: yDistance,
      zPosition: zDistance,
      counter: state.counter--
    }));
  };

  render() {
    const { distance } = this.state;
    return (
      <Container>
        <h2>Card Stax</h2>
        <AnimContainer>
          <AnimCards innerRef={x => (this.cardPerspectiveContainer = x)}>
            {card(cardsConfig, distance)}
          </AnimCards>
          <AnimControls
            animateUp={this.animateUp}
            animateDown={this.animateDown}
          />
        </AnimContainer>
      </Container>
    );
  }
}
