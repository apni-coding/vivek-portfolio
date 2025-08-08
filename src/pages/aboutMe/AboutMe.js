import React from "react";
import "./aboutMe.scss";
import about from "../../assets/img/other/about.png";
import { calculateTotalExperience } from "../../utils/commonFunction";
export default function AboutMe() {
    const totalExperience = calculateTotalExperience("2023-08-16", true);
  
  return (
    <>
      <section
        className="about__section about__section--bg section--padding"
        id="about"
      >
        <div className="container">
          <div className="about__section--inner d-flex">
            <div className="about__content">
              <div className="section__heading mb-30">
                <span className="section__heading--subtitle text__secondary">
                  ABOUT ME
                </span>
                <h2 className="section__heading--title">
                  Bringing ideas to life in code
                </h2>
              </div>
              <div className="about__info">
                <h3 className="about__info--title text__secondary mb-20">
                  PERSONAL INFOS:
                </h3>
                <ul className="about__info--wrapper d-flex">
                  <li className="about__info--items">Name: Vivek Kumar</li>
                  <li className="about__info--items">Address: Noida , U.P.</li>
                  <li className="about__info--items">Age: 25 Years</li>
                  <li className="about__info--items">Nationality: Indian</li>
                  <li className="about__info--items">Freelance: Available</li>
                  <li className="about__info--items">Languages: English, Hindi</li>
                  <li className="about__info--items">Phone: +91-7292932052</li>
                  <li className="about__info--items w-100">Email: vivek7292932052@gmail.com</li>
                </ul>
                <a className="about__btn primary__btn" href="#">
                  Hire Me
                </a>
              </div>
            </div>
            <div className="about__thumbnail">
              <div className="about__thumbnail--media position__relative">
                <img className="position__relative" src={about} alt="img" />
              </div>
              <div className="about__experience text-center">
                <h4 className="about__experience--title title-stroke">{totalExperience}+</h4>
                <span className="about__experience--subtitle">
                  Experience Working
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
