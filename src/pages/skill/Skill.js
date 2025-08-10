import React from "react";
import "./skill.scss";
import { SKILLS } from "../../constants/propertyReslover";
export default function Skill() {
  return (
    <>
      <section className="skills__section section--padding section--padding">
        <div className="container">
          <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
            <div className="section__heading max-width-580">
              <span className="section__heading--subtitle text__secondary">
                SKILLs
              </span>
              <h2 className="section__heading--title">
                Web tools I specialize in
              </h2>
            </div>
            <div className="section__heading--right max-width-450">
              <p className="section__heading--desc" style={{textAlign:"justify"}}>
                I specialize in frontend and backend technologies that enable
                the development of responsive, high-performance web
                applications. Below are some of the key tools I use regularly.
              </p>
            </div>
          </div>
          <div className="skills__section--inner d-flex justify-content-between">
            <div className="skills__step">
              {SKILLS.slice(0, 4).map((skill, index) => (
                <div key={index} className="skills__items">
                  <div className="skills__text">
                    <span className="skills__name">{skill.name}</span>
                    <span
                      className={`skills__count width_${skill.proficiency}`}
                    >
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div
                    className={`skills__field width_${skill.proficiency}`}
                  ></div>
                </div>
              ))}
            </div>
            <div className="skills__step">
              {SKILLS.slice(4, 8).map((skill, index) => (
                <div key={index} className="skills__items">
                  <div className="skills__text">
                    <span className="skills__name">{skill.name}</span>
                    <span
                      className={`skills__count width_${skill.proficiency}`}
                    >
                      {skill.proficiency}%
                    </span>
                  </div>
                  <div
                    className={`skills__field width_${skill.proficiency}`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
