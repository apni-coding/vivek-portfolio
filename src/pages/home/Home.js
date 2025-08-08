import React from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Service from "../service/Service";
import AboutMe from "../aboutMe/AboutMe";
import ExpericnceEducation from "../expericnceEducation/ExpericnceEducation";
import Skill from "../skill/Skill";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import ScrollUp from "../../common/scrollUp/ScrollUp";

export default function Home() {
  return (
    <div>
      <main className="main__content_wrapper">
        <Hero />
        <Service />
        <AboutMe />
        <ExpericnceEducation />
        <Skill />
        {/* <Portfolio /> */}
        <Contact />
        <Footer />
        {/* <ScrollUp /> */}
      </main>
    </div>
  );
}
