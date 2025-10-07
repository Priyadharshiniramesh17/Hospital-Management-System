import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import ServiceSlider from "./ServiceSlider";
import Documentation from "./Documentation";
import MultipleDashboards from "./MultipleDashboards";
import AboutUs from "./AboutUs";
import CustomerReview from "./CustomerReview";
import Footer from "./Footer";

export default function FrontPage() {
  return (
    <div className="frontpage-wrapper">
      <Header />
      <main>
        <HeroSection />
        <ServiceSlider />
        <Documentation />
        <MultipleDashboards />
        <AboutUs />
        <CustomerReview />
      </main>
      <Footer />
    </div>
  );
}
