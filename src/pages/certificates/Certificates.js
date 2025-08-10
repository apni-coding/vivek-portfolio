import React, { useState } from "react";
import "../portfolio/portfolio.scss";
import DetailPageHeader from "../header/DetailPageHeader";
import { CERTIFICATE_REWARD_LIST } from "../../constants/propertyReslover";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";

export default function Certificates({ isHomePage }) {
  const [activeFilter, setActiveFilter] = useState("*");
  const [showModal, setShowModal] = useState(false);
  const [activeInfo, setActiveInfo] = useState(null);

  const toggle = () => setShowModal(!showModal);

  const filteredProjects =
    activeFilter === "*"
      ? CERTIFICATE_REWARD_LIST
      : CERTIFICATE_REWARD_LIST.filter(
          (item) =>
            Array.isArray(item.category) && item.category.includes(activeFilter)
        );

  const filters = [
    { label: "Show All", value: "*" },
    { label: "Reward", value: "reward" },
    { label: "Certificate", value: "certificate" },
    { label: "Competitive Programming & Achievements", value: "programming" },
  ];

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = activeInfo?.bgImg;
    link.download = activeInfo?.name || "my-image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {!isHomePage && (
        <>
          <DetailPageHeader />
          <div className="page__heading">
            <h1 className="page__heading--title">CERTIFICATES & REWARDS</h1>
            <h2 className="page__heading--subtitle">
              ACHIEVE<span>MENTS</span>
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
                ACHIEVEMENTS
              </span>
              <h2 className="section__heading--title">
                Certificates & Rewards
              </h2>
            </div>
            <div className="section__heading--right max-width-450">
              <p className="section__heading--desc">
                Recognizing accomplishments and milestones achieved.
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
                    <div
                      className="popup-modal--open display-block"
                      onClick={() => {
                        if (item?.redirectLink) {
                          window.open(item?.redirectLink);
                          return;
                        }
                        setActiveInfo(item);
                        toggle();
                      }}
                      style={{ cursor: "pointer" }}
                    >
                      {/* Image */}
                      <div className="portfolio__image--card">
                        <img
                          src={
                            item?.bgImg ||
                            require("../../assets/img/other/projectbg.jpeg")
                          }
                          alt={item.name}
                        />
                      </div>

                      {/* Content */}
                      <div className="portfolio__content">
                        <span className="portfolio__zoom text-white">
                          {item?.redirectLink ? (
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
                          ) : (
                            <svg
                              className="view__btn--svg"
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            >
                              <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"></path>
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          )}
                        </span>
                        <h3 className="portfolio__title text-white">
                          {item.name}
                        </h3>
                        <p className="portfolio__desc text-white">
                          {item.shortDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              {filteredProjects.length === 0 && (
                <p className="text-center text-white">No items found.</p>
              )}
            </div>
          </div>
        </div>
      </section>
      {showModal && activeInfo && (
        <Modal isOpen={showModal} toggle={toggle} size="xl" centered scrollable>
          <ModalHeader toggle={toggle}>{activeInfo?.name}</ModalHeader>
          <ModalBody>
            <img
              src={activeInfo?.bgImg}
              alt=""
              style={{
                objectFit: "contain",
                width: "100%",
                height: "100%",
              }}
            />
          </ModalBody>

          <ModalFooter>
            <button className="secondary__btn download__btn" onClick={toggle}>
              Close
            </button>

            <button
              className="primary__btn download__btn"
              onClick={handleDownload}
            >
              <svg
                className="download__btn--svg"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
              Download
            </button>
          </ModalFooter>
        </Modal>
      )}
    </>
  );
}
