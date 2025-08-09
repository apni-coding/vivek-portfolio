import React from "react";

const SectionHeadingContent = ({ projectInfo }) => {
  console.log(projectInfo);
  return (
    <>
      <div className="section-main ">
        <div className="container">
          <p className="main-text my-services" data-aos="fade-down">
            MY WORK
          </p>
          <h1 className="ui-ux" data-aos="fade-down">
            {projectInfo?.title}
          </h1>
          <p className="Freelance freelance-text2" data-aos="fade-down">
            {projectInfo?.description}
          </p>
        </div>
      </div>
    </>
  );
};
export default SectionHeadingContent;
