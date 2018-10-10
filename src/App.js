import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { asyncComponent } from "./asyncComponent";
import { Home } from "./Home";

// Use Switch within the page components if you'd like to add page transitions
class App extends Component {
  render() {
    return (
      <HashRouter basename={"/" + process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/lawyer"
            component={asyncComponent(() => import("./Pages/Lawyer"))}
          />
          <Route
            path="/windowcleaning"
            component={asyncComponent(() => import("./Pages/WindowCleaning"))}
          />
          <Route
            path="/runascroll"
            component={asyncComponent(() => import("./Pages/RunaScroll"))}
          />
          <Route
            path="/fruitscroll"
            component={asyncComponent(() => import("./Pages/FruitScroll"))}
          />
          <Route
            path="/sliderpractice"
            component={asyncComponent(() => import("./SliderPractice"))}
          />
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
