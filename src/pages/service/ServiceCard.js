import React from "react";

export default function ServiceCard({ item }) {
  return (
    <>
      <div className="col-lg-4 col-md-6 col-sm-6 mb-30">
        <div className="services__card">
          <span className={`services__card--icon  mb-25 ${item?.class}`}>{item?.icon}</span>
          <div className="services__card--content">
            <h3 className="services__card--title mb-15">{item?.heading}</h3>
            <p className="services__card--desc mb-20">{item?.description}</p>
            {/* <a className={`services__card--link ${item?.class}`} href="#">
              Read More
            </a> */}
          </div>
        </div>
      </div>
    </>
  );
}
