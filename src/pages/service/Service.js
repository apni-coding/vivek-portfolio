import React from "react";
import "./service.scss";
import ServiceCard from "./ServiceCard";
import { SERVICE_LIST } from "../../constants/propertyReslover";
import DetailPageHeader from "../header/DetailPageHeader";
export default function Service({isHomePage}) {
  return (
    <>
      {!isHomePage && (
        <>
          <DetailPageHeader />
          <div class="page__heading">
            <h1 className="page__heading--title">MY SERVICES</h1>
            <h2 className="page__heading--subtitle">
              MY <span>SERVICES</span>
            </h2>
          </div>
        </>
      )}
      <section className="services__section section--padding" id="servives">
        <div className="container">
          <div className="section__heading--topbar d-flex align-items-center justify-content-between mb-50">
            <div className="section__heading max-width-580">
              <span className="section__heading--subtitle text__secondary">
                CREATIVE SERVICE
              </span>
              <h2 className="section__heading--title">
                Services to Build Scalable Web Solutions
              </h2>
            </div>
            <div className="section__heading--right max-width-450">
              <p className="section__heading--desc">
                I build fast, scalable, and user-friendly web applications using
                the MERN stack — from custom dashboards to full-stack apps and
                APIs, tailored to your needs.
              </p>
            </div>
          </div>
          <div className="services__section--inner">
            <div className="row mb--n30">
              {SERVICE_LIST.map((item) => (
                <ServiceCard key={item?.id} item={item} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
