import React, { useEffect } from "react";
import AOS from "aos";
import SectionHeadingContent from "./components/SectionHedingContent";
import SingleSectionTwo from "./components/SingleSectionTwo";
import "./projectDetail.scss";
import "aos/dist/aos.css";
import Header from "../header/Header";
import DetailPageHeader from "../header/DetailPageHeader";
const ProjectDetails = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <>
      {/* <Loader /> */}
      <Header />
      <div className="project-detail-wrapper overflow-hidden">
        <SectionHeadingContent />

        <SingleSectionTwo />
      </div>
    </>
  );
};
export default ProjectDetails;
