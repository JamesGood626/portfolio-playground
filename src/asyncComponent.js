import React, { Component } from "react";

export const asyncComponent = importComponent => {
  return class AsyncComponent extends Component {
    state = { component: null };

    componentDidMount = async () => {
      const importedComponent = await importComponent();
      const keyToAccessComponent = Object.getOwnPropertyNames(
        importedComponent
      )[1];
      this.setState({
        component: importedComponent[keyToAccessComponent]
      });
    };

    render() {
      const Component = this.state.component;
      return Component ? <Component /> : null;
    }
  };
};
