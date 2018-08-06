import React, { Fragment } from "react";
import Header from "./Containers/Header";
import ServicesSliderSection from "./Containers/ServicesSliderSection";
import TestimonialSection from "./Containers/TestimonialSection";

// TODO:
// Circle slider (Important) // Tweak the animation to be consistent
// Hide overflow in services description slider. (Text goes outside div on mobile)
// Make tweens for svg hamburger a timeline so it can be interrupted

// Found a bug!
// When waterstain or paint isn't selected and you drag the range slider
// the initial number will flicker from 0 to the initial number i.e. 20
export const Main = () => {
  return (
    <Fragment>
      <Header />
      <main>
        <ServicesSliderSection />
        <TestimonialSection />
      </main>
    </Fragment>
  );
};
