import React, { Fragment } from "react";
import Header from "./Containers/Header";
import ServicesSliderSection from "./Containers/ServicesSliderSection";
import { TestimonialSection } from "./Components/TestimonialSection";

// TODO:
// Responsive Hamburger menu (Just need the svg for it now...)
// Menu hover effects?
// Button hover effect (shinyness)
// Fill Testimonial circles with testimonial content (Important)
// Circle slider (Important)

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
