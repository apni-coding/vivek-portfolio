import React, { useEffect } from "react";
import Header from "../header/Header";
import Hero from "../hero/Hero";
import Service from "../service/Service";
import AboutMe from "../aboutMe/AboutMe";
import ExpericnceEducation from "../expericnceEducation/ExpericnceEducation";
import Skill from "../skill/Skill";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import ScrollUp from "../../common/scrollUp/ScrollUp";
import Certificates from "../certificates/Certificates";
import { useDispatch, useSelector } from "react-redux";
import { getLoginUserDetail } from "../../redux/slices/userSlice";

export default function Home() {
  const dispatch = useDispatch();
  // const {loginUserDetails} = useSelector((state)=>state.user)
  // console.log(loginUserDetails)
  useEffect(()=>{
    dispatch(getLoginUserDetail())
  },[])
  return (
    <div>
      <Header />
      <main className="main__content_wrapper">
        <Hero isHomePage={true} />
        <Service isHomePage={true} />
        <AboutMe isHomePage={true} />
        <Skill />
        <Certificates isHomePage={true} />
        <ExpericnceEducation isHomePage={true} />
        <Portfolio isHomePage={true} />
        <Contact isHomePage={true} />
        <Footer />
        {/* <ScrollUp /> */}
      </main>
    </div>
  );
}
