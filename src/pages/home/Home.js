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
      <Header />
      <main className="main__content_wrapper">
        <Hero  isHomePage={true}/>
        <Service  isHomePage={true}/>
        <AboutMe  isHomePage={true}/>
        <ExpericnceEducation  isHomePage={true}/>
        <Skill />
        <Portfolio isHomePage={true}/>
        <Contact isHomePage={true}/>
        <Footer />
        {/* <ScrollUp /> */}
      </main>
    </div>
  );
}
