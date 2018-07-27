import React, { Fragment } from "react";
import Header from "./Containers/Header";
import ServicesSliderSection from "./Containers/ServicesSliderSection";

export const WindowCleaningPage = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <ServicesSliderSection />
      </main>
    </Fragment>
  );
};
