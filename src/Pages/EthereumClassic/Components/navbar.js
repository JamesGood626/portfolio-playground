import React from "react";
import styled from "styled-components";
import EthereumLogo from "../assets/ethereum_logo.svg";
import ddArrow from "../assets/dd_arrow.svg";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 8rem;

  #header-nav {
    display: none;
  }

  #hamburger {
    position: relative;
    height: 0.2rem;
    width: 3rem;
    background: var(--primary-color);
  }

  #hamburger:before {
    content: "";
    position: absolute;
    top: -10px;
    height: 0.2rem;
    width: 3rem;
    background: ${props => props.theme.primaryColor};
  }

  #hamburger:after {
    content: "";
    position: absolute;
    top: 10px;
    height: 0.2rem;
    width: 3rem;
    background: ${props => props.theme.primaryColor};
  }

  /* Desktop styling */
  @media (min-width: 1270px) {
    #hamburger {
      display: none;
    }

    #header-nav {
      display: block;
    }

    #header-nav-list {
      display: flex;
      color: ${props => props.theme.primaryGrey};
      list-style-type: none;
    }

    #header-nav-list li {
      padding-left: 3.4rem;
    }

    #header-nav-list li span {
      padding-left: 0.4rem;
    }
  }
`;

export default function navbar() {
  return (
    <Header>
      <img src={EthereumLogo} />
      <div id="hamburger" />
      <nav id="header-nav">
        <ul id="header-nav-list">
          <li>
            Education{" "}
            <span>
              <img src={ddArrow} />
            </span>
          </li>
          <li>Teams</li>
          <li>Roadmap</li>
          <li>Resources</li>
          <li>Community</li>
          <li>Powered by ETC</li>
          <li>Blog</li>
          <li>
            Social{" "}
            <span>
              <img src={ddArrow} />
            </span>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
