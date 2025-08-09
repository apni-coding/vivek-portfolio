import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
// import SinglePortfolioImg1 from "../../assets/images/single-portfolio-over-img1.jpg";
// import SinglePortfolioImg2 from "../../assets/images/single-portfolio-over-img2.jpg";
// import SingleServicesMainImg from "../../assets/images/single-services-main-img.jpg";

import SinglePortfolioImg1 from "../../../assets/img/banner/bg-shape1.png";
import SinglePortfolioImg2 from "../../../assets/img/banner/bg-shape1.png";
import SingleServicesMainImg from "../../../assets/img/other/projectbg.jpeg";

import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import PdfViewerModal from "../../../common/pdfViewer/PdfViewer";

const SingleSectionTwo = ({ projectInfo }) => {
  const [counted, setCounted] = useState(false);
  const countersRef = useRef([]);
  const [isModalShow, setIsModalShow] = useState(false);

  const toggleModal = () => setIsModalShow(!isModalShow);

  useEffect(() => {
    AOS.init({ duration: 2000 });

    const handleScroll = () => {
      if (countersRef.current.length > 0) {
        const oTop = countersRef.current[0]?.offsetTop - window.innerHeight;
        if (!counted && window.scrollY > oTop) {
          countersRef.current.forEach((counter) => {
            const updateCount = () => {
              const target = +counter.getAttribute("data-count");
              const count = +counter.innerText;
              const speed = 200; // Change this value to adjust the speed
              const increment = target / speed;

              if (count < target) {
                counter.innerText = Math.ceil(count + increment);
                setTimeout(updateCount, 10);
              } else {
                counter.innerText = target;
              }
            };

            updateCount();
          });

          setCounted(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counted]);
  return (
    <>
      <section className="section-two-my-services">
        <div className="container">
          <div className="single-services-img-main bike" data-aos="fade-up">
            <img
              className="single-services-main-img "
              src={SingleServicesMainImg}
              alt="single-services-main-img"
              
            />
          </div>
          <div className="row overflow-hidden ">
            <div className="col-xxl-8 col-xl-8 col-lg-8 ">
              <h2 className="build" data-aos="fade-up">
                {projectInfo?.detailedIntro?.heading}
              </h2>
              <p className="nunc-text mattis" data-aos="fade-up">
                {projectInfo?.detailedIntro?.paragraph1}
              </p>
              <p className="nunc-text" data-aos="fade-up">
                {projectInfo?.detailedIntro?.paragraph2}
              </p>
              <h2 className="sed" data-aos="fade-up">
                Role & Responsibilities
              </h2>
              <p className="nunc-text" data-aos="fade-up">
                {projectInfo?.roleAndResponsibilities?.shortDescription}
              </p>
              <ul className="single-service-list" data-aos="fade-up">
                {projectInfo?.roleAndResponsibilities?.roleList?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Row>
                <Col xs={12} md={8} lg={9}>
                  <h2 className="sed" data-aos="fade-up">
                    Features
                  </h2>
                  <ul className="single-service-list" data-aos="fade-up">
                    {projectInfo?.features?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Col>
                <Col xs={12} md={4} lg={3}>
                  <h2 className="sed" data-aos="fade-up">
                    Tech Stack
                  </h2>
                  <ul className="single-service-list" data-aos="fade-up">
                    {projectInfo?.technologiesUsed?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Col>
              </Row>

              <Row>
                <Col xs={12} md={12} lg={12}>
                  <h2 className="sed" data-aos="fade-up">
                    Challenges & Solutions
                  </h2>
                  <ul className="single-service-list" data-aos="fade-up">
                    {projectInfo?.challengesAndSolutions?.map((item, i) => (
                      <li key={i} className={`d-flex ${i == 0 ? "" : "mt-4"}`}>
                        <div>
                          <strong className="text-white me-2">
                            Challenge:
                          </strong>{" "}
                          <span>{item?.challenge}</span> <br />
                          <strong className="text-white me-2">
                            Solution:
                          </strong>{" "}
                          <span>{item?.solution}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Col>
                <Col xs={12} md={12} lg={12}>
                  <h2 className="sed" data-aos="fade-up">
                    Key Learning
                  </h2>
                  <ul className="single-service-list" data-aos="fade-up">
                    {projectInfo?.keyLearnings?.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </Col>
              </Row>

              <h2 className="sed" data-aos="fade-up">
                Conclusion
              </h2>
              <p
                className="nunc-text"
                data-aos="fade-up"
                style={{ marginBottom: "80px" }}
              >
                {projectInfo?.conclusion}
              </p>
            </div>
            <div className="col-xxl-4 col-xl-4 col-lg-4 overflow-hidden">
              <div
                className="other-services-main other-services-main-spacer"
                data-aos="fade-left"
              >
                <p className="other-services">Project Details</p>
                <div className="project-details-main pt-0">
                  <p className="project-details-sub-text">Category:</p>
                  <p className="development">{projectInfo?.category}</p>
                </div>

                <div className="project-details-main">
                  <p className="project-details-sub-text">Client:</p>
                  <p className="development">{projectInfo?.client}</p>
                </div>
                <div className="project-details-main border-0">
                  <p className="project-details-sub-text">Date:</p>
                  <p className="development">
                    {projectInfo?.projectTimeline?.startDate} to{" "}
                    {projectInfo?.projectTimeline?.endDate}
                  </p>
                </div>

                {projectInfo?.liveDemoLink && (
                  <div className="project-details-main">
                    <p className="project-details-sub-text">View Demo:</p>
                    <p
                      className="development"
                      style={{ cursor: "pointer" }}
                      onClick={toggleModal}
                    >
                      Click Here
                    </p>
                  </div>
                )}
              </div>
              <div
                className="other-services-main other-services-main2"
                data-aos="fade-left"
              >
                <div className="call-svg-main">
                  <Link to="tel:+917292932052">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                    >
                      <g clipPath="url(#clip0_233_43)">
                        <path
                          d="M10 8H18L22 18L17 21C19.1419 25.3431 22.6569 28.8581 27 31L30 26L40 30V38C40 39.0609 39.5786 40.0783 38.8284 40.8284C38.0783 41.5786 37.0609 42 36 42C28.1985 41.5259 20.8403 38.213 15.3137 32.6863C9.78701 27.1597 6.4741 19.8015 6 12C6 10.9391 6.42143 9.92172 7.17157 9.17157C7.92172 8.42143 8.93913 8 10 8Z"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M30 14C31.0609 14 32.0783 14.4214 32.8284 15.1716C33.5786 15.9217 34 16.9391 34 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M30 6C33.1826 6 36.2348 7.26428 38.4853 9.51472C40.7357 11.7652 42 14.8174 42 18"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_233_43">
                          <rect width="48" height="48" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </Link>
                </div>
                <div className="call-anytime-box-main" data-aos="fade-left">
                  <p className="other-services service_provider">
                    Looking for Design & Development Service Provider?
                  </p>
                  <p className="call-anytime">CALL ANYTIME</p>
                  <div className="call-anytime-btn">
                    <Link to="tel:+917292932052">+91-7292932052</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isModalShow && (
        <PdfViewerModal
          showModal={isModalShow}
          toggle={toggleModal}
          fileUrl={projectInfo?.liveDemoLink}
          isDownload={false}
          title={projectInfo?.title}
          isIframeShow={true}
        />
      )}
    </>
  );
};
export default SingleSectionTwo;
