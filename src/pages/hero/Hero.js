import React from "react";
import "./hero.scss";
import { SOCIAL_MEDIA_LINKS } from "../../constants/propertyReslover";
import { calculateTotalExperience } from "../../utils/commonFunction";
import { Link } from "react-router-dom";
import { routeConstants } from "../../constants/routeConstant";
export default function Hero() {
  const totalExperience = calculateTotalExperience("2023-08-16");

  return (
    <>
      <div className="hero__section hero__section--bg" id="home">
        <div className="container">
          <div className="hero__section--inner d-flex align-items-center">
            <div className="hero__thumbnail position__relative">
              <img
                className="hero__thumbnail--media light_img"
                src={require("../../assets/img/hero/hero-thumbnail.png")}
                alt="img"
                style={{opacity:"0.8"}}
              />
              <img
                className="hero__thumbnail--media dark_img"
                src={require("../../assets/img/hero/hero-man-dark.png")}
                alt="img"
              />
              <div className="projects__budget d-flex align-items-center">
                <span className="projects__budget--icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="45"
                    height="45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-check-circle"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </span>
                <div className="projects__budget--content">
                  <span className="projects__budget--ammount">20+</span>
                  <span className="projects__budget--text">Complete Projects</span>
                </div>
              </div>
              <span className="logo__positioning one">
                <img
                  src={require("../../assets/img/logo/react.png")}
                  alt="logo"
                  style={{ height: "91px", width: "91px" }}
                />
              </span>
              <span className="logo__positioning two">
                <img
                  src={require("../../assets/img/logo/node.jpg")}
                  alt="logo"
                  style={{ height: "150px", width: "150px" }}
                />
              </span>
            </div>
            <div className="hero__content">
              <span className="hero__content--subtitle text__secondary mb-10">
                HELLO I'M
              </span>
              <h2 className="hero__content--title mb-15">Vivek Kumar! </h2>
              <h3 className="hero__content--subtitle2 mb-20">
                MERN Stack Developer{" "}
              </h3>
              <p className="hero__content--desc mb-30">
                MERN Stack Developer with {totalExperience} of hands-on
                experience in building modern, responsive, and scalable web
                apps.
              </p>
              <div className="hero__content--footer d-flex align-items-center">
                <Link className="btn hero__content--btn" to={routeConstants.ABOUT_ME}>
                  About Me
                </Link>
                <div className="social__share d-flex align-items-center">
                  <span className="social__share--title">Follow Me: </span>
                  <ul className="social__share--wrapper d-flex">
                    <li className="social__share--child">
                      <a
                        className="social__share--link"
                        href={SOCIAL_MEDIA_LINKS.GITHUB}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20px"
                          height="20px"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path
                            d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 
                              3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 
                              0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
                              1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.304 
                              3.495.997.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.334-5.467-5.93 
                              0-1.31.47-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
                              0 0 1.005-.322 3.3 1.23a11.52 11.52 0 013.003-.403 
                              c1.02.005 2.045.138 3.003.403 2.28-1.552 3.285-1.23 
                              3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
                              1.23 1.91 1.23 3.22 0 4.61-2.807 5.625-5.48 
                              5.92.435.375.81 1.096.81 2.215 0 1.6-.015 2.887-.015 
                              3.286 0 .315.21.694.825.576C20.565 22.092 24 17.592 
                              24 12.297c0-6.627-5.373-12-12-12"
                          />
                        </svg>

                        <span className="visually-hidden">Github</span>
                      </a>
                    </li>
                    <li className="social__share--child">
                      <a
                        className="social__share--link"
                        href={SOCIAL_MEDIA_LINKS.LINKEDIN}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                        >
                          <path d="M19 0h-14C2.239 0 0 2.239 0 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5V5c0-2.761-2.239-5-5-5zM7.5 19h-3v-9h3v9zM6 8.5C4.896 8.5 4 7.604 4 6.5S4.896 4.5 6 4.5 8 5.396 8 6.5 7.104 8.5 6 8.5zM20 19h-3v-4.5c0-1.378-1.122-2.5-2.5-2.5S12 13.122 12 14.5V19h-3v-9h3v1.25c.738-.942 1.841-1.25 3-1.25 2.206 0 4 1.794 4 4V19z" />
                        </svg>

                        <span className="visually-hidden">Linkedin</span>
                      </a>
                    </li>
                    <li className="social__share--child">
                      <a
                        className="social__share--link"
                        href={SOCIAL_MEDIA_LINKS.YOUTUBE}
                        target="_blank"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="20px"
                          height="20px"
                          fill="currentColor"
                        >
                          <path d="M23.498 6.186a2.998 2.998 0 0 0-2.112-2.121C19.579 3.5 12 3.5 12 3.5s-7.58 0-9.387.565A3 3 0 0 0 .5 6.186 31.42 31.42 0 0 0 0 12c0 2.002.183 3.94.5 5.814a2.998 2.998 0 0 0 2.113 2.121C4.421 20.5 12 20.5 12 20.5s7.58 0 9.387-.565a2.998 2.998 0 0 0 2.112-2.121c.317-1.874.5-3.812.5-5.814 0-2.002-.183-3.94-.5-5.814zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
                        </svg>

                        <span className="visually-hidden">Youtube</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
