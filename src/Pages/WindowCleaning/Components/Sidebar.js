import React, { Component } from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components";
import "../Styles/main.css";

export default class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.sidebarContainer = document.createElement("div");
    document.body.appendChild(this.sidebarContainer);
  }

  componentWillUnmount = () => {
    document.body.removeChild(this.sidebarContainer);
  };

  render() {
    return ReactDOM.createPortal(
      <div className="sidebar-container" ref={x => (this.sidebar = x)}>
        {this.props.children}
      </div>,
      this.sidebarContainer
    );
  }
}
