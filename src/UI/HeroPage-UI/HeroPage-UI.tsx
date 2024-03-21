import React from "react";
import Welcome from "./WelcomeView-UI/Welcome";
import About from "./About-UI/About";
import Testimonials from "./Testimonial-UI/Testimonials";
import Blogs from "./Blog-Footer-UI/Blogs";
import Footer from "./Blog-Footer-UI/Footer";

const HeroPageUI: React.FC = function () {
  return (
    <>
      <Welcome />
      <About />
      <Testimonials />
      <Blogs />
      <Footer />
    </>
  );
};

export default HeroPageUI;
