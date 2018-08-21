import React from "react";
import Header from "./Containers/Header";
import ServiceSection from "./Containers/ServiceSection";
import { OfferSection } from "./Components/OfferSection";
import ValuePropSection from "./Containers/ValuePropSection";
import TestimonialSection from "./Containers/TestimonialSection";
import { BlogPostSection } from "./Components/BlogPostSection";
import { ContactSection } from "./Components/ContactSection";
import { Footer } from "./Components/Footer";

export const Main = () => {
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
