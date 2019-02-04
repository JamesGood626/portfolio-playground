import React from "react";
import styled from "styled-components";
import shoe from "../assets/budapest_shoe.png";
import euro from "../assets/euro_icon.svg";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 3rem;
  padding-bottom: 3rem;
  width: 100%;

  #product-display-mid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* is padding really the best way to match the alignment of the design? */
    /* flex-end certainly didn't help, and applying any styles to the div which */
    /* contains the image distorted the aspect ratio -> the height: auto/px width: 50% and object-fit setup */
    padding-left: 10rem;
    padding-top: 5rem;
    /* background: orange; */
  }

  #product-display-right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding-right: 1.6rem;
    width: 100%;
  }

  .shoe-header {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    height: 3.6rem;
    /* Necessary to offset the strange 0.1rem inside padding required to align the two main titles in the h3 */
    margin-left: -0.1rem;
    font-size: 2rem;
    font-weight: 200;
    letter-spacing: 0.1rem;
    color: #ffffff;
  }

  .shoe-header span {
    padding-left: 0.1rem;
    font-size: 0.7rem;
    font-weight: 200;
    letter-spacing: 0.2rem;
  }

  .shoe-description-header {
    color: #ffffff;
    font-size: 0.7rem;
    font-weight: 200;
    letter-spacing: 0.2rem;
  }

  .shoe-description {
    margin-top: 2.2rem;
    color: #4a4a4a;
    width: 17rem;
  }

  .shoe-description h4 {
    margin-bottom: -0.2rem;
  }

  .shoe-description p {
    margin-top: 1rem;
    line-height: 1.6rem;
  }

  .shoe-price {
    margin-top: 2.2rem;
    margin-bottom: 3rem;
  }

  .shoe-price h4 {
    margin-top: 1rem;
    color: #ffffff;
  }

  .shoe-price p {
    font-size: 2.4rem;
    margin-top: 0.3rem;
    color: #ffffff;
  }

  /**
   *
   *
   * Tablet Media Queries
   *
   *
   **/
  @media screen and (max-width: 1140px) {
    #product-display-mid {
      padding-left: 3rem;
    }
  }

  /**
   *
   *
   * Tablet And Phone Media Queries
   *
   *
   **/
  @media screen and (max-width: 1000px) {
    #product-display-mid {
      padding-left: 0;
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
    display: flex;
    flex-direction: column;

    #product-display-right {
      align-items: flex-start;
      padding-right: 0;
    }

    #product-display-mid {
      padding-left: 0;
      padding-top: 0;
      width: 80%;
    }

    #product-display-mid > img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }

  @media screen and (max-width: 600px) {
    #product-display-mid {
      padding-left: 0;
      padding-top: 0;
      width: 100%;
    }
  }
`;

export default function productDisplay() {
  return (
    <Section id="product-display">
      <div id="product-display-left">
        <h3 class="shoe-header">
          <span>MODEL</span> 1010
        </h3>
      </div>
      <div id="product-display-mid">
        <img src={shoe} />
      </div>
      <div id="product-display-right">
        <div>
          <h3 class="shoe-header">
            <span class="shoe-description-header">STILUS</span> Budapest Style
          </h3>
          <div class="shoe-description">
            <h4 class="shoe-description-header">ROLUNK</h4>
            <p>
              Evsazadokkal ezelott is hasnalt kuloneges cipeszszerszamokkal,
              tobb szaz aprolekos muvelettel keszitjuk cipoinket
            </p>
          </div>
          <div class="shoe-description">
            <h4 class="shoe-description-header">RESZLETEK</h4>
            <p>Budapest kaptafa Dupla talp</p>
          </div>
          <div class="shoe-price">
            <h4 class="shoe-price-header shoe-description-header">AR</h4>
            <p>
              <span>
                <img src={euro} />
              </span>{" "}
              530
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
