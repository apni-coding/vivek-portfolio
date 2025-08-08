import React, { useState } from "react";
import "./portfolio.scss";
import { PROJECT_LIST } from "../../constants/propertyReslover";
import DetailPageHeader from "../header/DetailPageHeader";
import { Link } from "react-router-dom";
import { routeConstants } from "../../constants/routeConstant";

export default function Portfolio({ isHomePage }) {
  const [activeFilter, setActiveFilter] = useState("*");

  // Filtered projects (supports category array)
  const filteredProjects =
    activeFilter === "*"
      ? PROJECT_LIST
      : PROJECT_LIST.filter(
          (item) =>
            Array.isArray(item.category) && item.category.includes(activeFilter)
        );

  const filters = [
    { label: "Show All", value: "*" },
    { label: "Web", value: "web" },
    // { label: "Graphics", value: "graphics" },
    { label: "Development", value: "development" },
    { label: "Mobile", value: "mobile" },
  ];

  return (
    <>
      {!isHomePage && (
        <>
          <DetailPageHeader />
          <div class="page__heading">
            <h1 className="page__heading--title">PORTFOLIO</h1>
            <h2 className="page__heading--subtitle">
              PORT<span>FOLIO</span>
            </h2>
          </div>
        </>
      )}

      <section
        id="portfolio"
         className={`${
          isHomePage
            ? "portfolio__section portfolio__section--bg section--padding"
            : "contact__section contact__page--style section--padding"
        }`}
      >
        <div className="container">
          {/* Heading */}
          <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
            <div className="section__heading max-width-580">
              <span className="section__heading--subtitle text__secondary">
                PORTFOLIO
              </span>
              <h2 className="section__heading--title">
                Innovative Projects, Real Results
              </h2>
            </div>
            <div className="section__heading--right max-width-450">
              <p className="section__heading--desc">
                Highlighting top-notch projects with creativity and precision.
              </p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="portfolio__section--inner">
            <div className="button-group filters-button-group mb-50">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  className={`filters__button--items button ${
                    activeFilter === filter.value ? "is-checked" : ""
                  }`}
                  onClick={() => setActiveFilter(filter.value)}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Portfolio Grid */}
            <div className="portfolio__grid mb--n30">
              {filteredProjects.map((item) => (
                <div
                  className={`element-item ${item.category.join(" ")}`}
                  key={item.id}
                >
                  <div className="portfolio__card">
                    <Link
                      className="popup-modal--open display-block"
                      to={routeConstants.PORTFOLIO_LIST}
                    >
                      {/* Project Image */}
                      <div className="portfolio__image--card">
                        <img
                          src={item?.bgImg || require("../../assets/img/other/projectbg.jpeg")}
                          alt={item.name}
                          
                        />
                      </div>

                      {/* Project Content */}
                      <div className="portfolio__content">
                        <span className="portfolio__zoom text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-arrow-up-right"
                          >
                            <line x1="7" y1="17" x2="17" y2="7"></line>
                            <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                        </span>
                        <h3 className="portfolio__title text-white">
                          {item.name}
                        </h3>
                        <p className="portfolio__desc text-white">
                          {item.shortDescription}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <p className="text-center text-white">No projects found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
