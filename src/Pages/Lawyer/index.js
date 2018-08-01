import React from "react";
import Header from "./Containers/Header";
import ServiceSection from "./Containers/ServiceSection";
import { OfferSection } from "./Components/OfferSection";
import ValuePropSection from "./Containers/ValuePropSection";
import TestimonialSection from "./Containers/TestimonialSection";
import { BlogPostSection } from "./Components/BlogPostSection";
import { ContactSection } from "./Components/ContactSection";
import { Footer } from "./Components/Footer";

// What are the trade offs of using this index.js LawyerPage as a functional component
// instead of a stateful one that would manage the page scroll and trigger animations
// versus letting each section monitor that on their own. Ehh... I need to refactor. The latter
// sounds bad.
export const LawyerPage = () => {
  return (
    <div>
      <Header />
      <main>
        <ServiceSection />
        <OfferSection />
        <ValuePropSection />
        <TestimonialSection />
        <BlogPostSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  );
};
