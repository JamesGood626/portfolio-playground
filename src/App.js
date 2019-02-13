import React, { Component } from "react";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { asyncComponent } from "./asyncComponent";
import { Home } from "./Home";

// NOTE: visiting fruit scroll and then navigating to a different project page now locks
// the body in place. Check you css.
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
            path="/budapest-shoe"
            component={asyncComponent(() => import("./Pages/BudapestShoe"))}
          />
          {/* <Route
            path="/grid-primer-one"
            component={asyncComponent(() => import("./Pages/GridPrimerOne"))}
          /> */}
          <Route
            path="/architecture-grid"
            component={asyncComponent(() => import("./Pages/ArchitectureGrid"))}
          />
          <Route
            path="/residence"
            component={asyncComponent(() => import("./Pages/Residence"))}
          />
          <Route
            path="/grid-exp"
            component={asyncComponent(() =>
              import("./Pages/GridExperimentation")
            )}
          />
          <Route
            path="/ethereum-classic"
            component={asyncComponent(() => import("./Pages/EthereumClassic"))}
          />
          {/* <Route
            path="/card-stack-animation"
            component={asyncComponent(() =>
              import("./Pages/CardStackAnimation")
            )}
          /> */}
          {/* <Route
            path="/image-grid"
            component={asyncComponent(() => import("./Pages/ImageGrid"))}
          /> */}
          {/* <Route
            path="/sliderpractice"
            component={asyncComponent(() => import("./SliderPractice"))}
          /> */}
        </Switch>
      </HashRouter>
    );
  }
}

export default App;
