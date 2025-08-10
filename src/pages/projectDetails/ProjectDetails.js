import React, { useEffect, useState } from "react";
import AOS from "aos";
import SectionHeadingContent from "./components/SectionHedingContent";
import SingleSectionTwo from "./components/SingleSectionTwo";
import "./projectDetail.scss";
import "aos/dist/aos.css";
import Header from "../header/Header";
import DetailPageHeader from "../header/DetailPageHeader";
import { useParams } from "react-router-dom";
import { PROJECT_LIST } from "../../constants/propertyReslover";
const ProjectDetails = () => {
  const params = useParams();
  const [projectInfo, setProjectInfo] = useState({});

  useEffect(() => {
    if (params?.id) {
      const projectId = Number(params?.id);
      const singleProjectInfo = PROJECT_LIST.find(
        (item) => item.id === projectId
      );
      setProjectInfo(singleProjectInfo?.projectInfo);
    }
  }, [params?.id]);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  // Apply background change when theme changes
  useEffect(() => {
    const header = document.querySelector(".header__sticky");
    const linkList = document.querySelectorAll(".header__menu--link");
    const cvBtn = document.querySelector(".secondary__btn ")
    if (header) {
      header.style.backgroundColor = "#000000";
    }
    if (linkList) {
      linkList.forEach((link) => {
        link.style.color = "#fff";
      });
    }
    if(cvBtn){
      cvBtn.style.color = "#fff"
    }
  }, []);
  return (
    <>
      {/* <Loader /> */}
      <Header />
      <div className="project-detail-wrapper overflow-hidden">
        <SectionHeadingContent projectInfo={projectInfo} />

        <SingleSectionTwo projectInfo={projectInfo} />
      </div>
    </>
  );
};
export default ProjectDetails;
