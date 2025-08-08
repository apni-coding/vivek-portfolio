import React, { useEffect, useRef } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { routeConstants } from "../../constants/routeConstant";
import { downloadFile } from "../../utils/commonFunction";
import { CV_URL } from "../../constants/propertyReslover";
import logo from "../../assets/img/logo/logo.png";
export default function Header() {
    const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        if (window.scrollY > 50) {
          headerRef.current.classList.add("sticky");
        } else {
          headerRef.current.classList.remove("sticky");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <header className="header__section  header__transparent">
        <div className="header__sticky" ref={headerRef}>
          <div className="container">
            <div className="main__header d-flex justify-content-between align-items-center">
              <div className="main__logo">
                <h1 className="main__logo--title">
                  <Link className="main__logo--link" to={routeConstants.HOME}>
                    <img
                      className="main__logo--img logo_light"
                      src={logo}
                      alt="logo-img"
                      style={{height:"50px", width:"157px"}}
                    />
                    <img
                      className="main__logo--img logo_dark"
                      src={logo}
                      alt="logo-img"
                       style={{height:"50px", width:"157px"}}
                    />
                  </Link>
                </h1>
              </div>
              <div className="offcanvas__header--menu__open ">
                <Link
                  className="offcanvas__header--menu__open--btn"
                  to={routeConstants.HOME}
                  data-offcanvas
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon offcanvas__header--menu__open--svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M80 160h352M80 256h352M80 352h352"
                    />
                  </svg>
                  <span className="visually-hidden">Offcanvas Menu Open</span>
                </Link>
              </div>
              <div className="main__header--right d-flex align-items-center d-none d-lg-block">
                <div className="header__menu menu_border--none">
                  <nav className="header__menu--navigation">
                    <ul className="header__menu--wrapper d-flex">
                      <li className="header__menu--items">
                        <Link
                          className="header__menu--link"
                          to={routeConstants.HOME}
                        >
                          Home
                        </Link>
                      </li>
                      <li className="header__menu--items">
                        <Link
                          className="header__menu--link"
                          to={routeConstants.ABOUT_ME}
                        >
                          About{" "}
                        </Link>
                      </li>
                      <li className="header__menu--items">
                        <Link
                          className="header__menu--link"
                          to={routeConstants.SERVICE_LIST}
                        >
                          Service{" "}
                        </Link>
                      </li>
                      <li className="header__menu--items">
                        <Link
                          className="header__menu--link"
                          to={routeConstants.PORTFOLIO_LIST}
                        >
                          Portfolio{" "}
                        </Link>
                      </li>
                      {/* <li className="header__menu--items">
                        <Link
                          className="header__menu--link"
                          to={routeConstants.HOME}
                        >
                          Blog
                        </Link>
                      </li> */}
                      <li className="header__menu--items">
                        <Link
                          className="header__menu--link"
                          to={routeConstants.CONTACT_US}
                        >
                          Contact{" "}
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <button
                  className="primary__btn download__btn"
                  onClick={() => {
                    downloadFile(CV_URL, "vivek_resume.pdf");
                  }}
                >
                  <svg
                    className="download__btn--svg"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  Download CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
