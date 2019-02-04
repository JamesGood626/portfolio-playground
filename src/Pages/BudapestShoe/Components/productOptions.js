import React from "react";
import styled from "styled-components";
import brownCircle from "../assets/brown_img.png";
import blueCircle from "../assets/blue_img.png";
import blackCircle from "../assets/black_img.png";

const Section = styled.section`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  &:after {
    content: "";
    position: absolute;
    top: -10px;
    width: 100%;
    height: 1px;
    background: #3f3f3f;
  }

  .option-text {
    font-size: 0.7rem;
    font-weight: 200;
    letter-spacing: 0.2rem;
  }

  #product-options-left {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 24rem;
  }

  #product-options-left h5 {
    width: 100%;
    letter-spacing: 0.15rem;
    color: #fff;
  }

  #product-options-left-img-container {
    display: flex;
    width: 100%;
    justify-content: space-around;
  }

  .product-options-img {
    height: 2.4rem;
  }

  #get-checkmarked {
    position: relative;
  }

  /* FIX FIX FIX
  FIX FIX FIX */
  #get-checkmarked::before {
    content: url("../assets/check_icon.svg");
    position: absolute;
    top: calc(2.4rem - 70%);
    left: calc(2.4rem - 65%);
  }

  #product-options-right {
    display: flex;
    align-items: center;
  }

  #product-options-right h5 {
    margin-right: 1.6rem;
    color: #fff;
    letter-spacing: 0.15rem;
  }

  #kosarba-button {
    display: inline-block;
    position: relative;
    border: none;
    padding: 0.4rem 1.6rem;
    margin: 10px;
    min-height: 2.2rem;
    font-size: 0.7rem;
    text-align: center;
    cursor: pointer;
    appearance: none;
    border-radius: 25px;
    z-index: 10;
  }

  .size-button {
    display: inline-block;
    position: relative;
    border: none;
    /* padding: 1rem 1rem; */
    margin-left: 10px;
    /* min-height: 0.6rem; */
    height: 2.4rem;
    width: 2.4rem;
    font-size: 0.8rem;
    text-align: center;
    cursor: pointer;
    appearance: none;
    border-radius: 50px;
    z-index: 10;
    color: #fff;
    background: rgba(0, 0, 0, 0);
    border: 1px solid #3f3f3f;
  }

  /**
   *
   *
   * Tablet and Phone Media Queries
   *
   *
   **/
  @media screen and (max-width: 1000px) {
    #product-options-right h5 {
      margin-right: 0;
      color: #fff;
      letter-spacing: 0.15rem;
    }

    #product-options-left {
      width: 20rem;
    }

    #product-options-right {
      width: 20rem;
      justify-content: space-between;
    }

    #product-options-left-img-container {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }

  /**
   *
   *
   * Large Phone Media Queries
   *
   *
   **/
  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 1rem;

    #product-options-left {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }

    #product-options-right {
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
  }
`;

export default function productOptions() {
  return (
    <Section id="product-options">
      <div id="product-options-left">
        <h5 class="option-text">ANYAG VALASZTASA</h5>
        <div id="product-options-left-img-container">
          <div>
            <img class="product-options-img" src={brownCircle} />
          </div>
          <div>
            <img class="product-options-img" src={blueCircle} />
          </div>
          <div id="get-checkmarked">
            <img class="product-options-img" src={blackCircle} />
          </div>
        </div>
      </div>
      <div id="product-options-mid">
        <button id="kosarba-button">KOSARBA</button>
      </div>
      <div id="product-options-right">
        <h5 class="option-text">MERET VALASTASA</h5>
        <button class="size-button">40</button>
        <button class="size-button">41</button>
        <button class="size-button">42</button>
      </div>
    </Section>
  );
}
