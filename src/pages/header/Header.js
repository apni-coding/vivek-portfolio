import React, { useEffect, useRef, useState } from "react";
import "./header.scss";
import { Link, NavLink } from "react-router-dom";
import { routeConstants } from "../../constants/routeConstant";
import { downloadFile } from "../../utils/commonFunction";
import { CV_URL } from "../../constants/propertyReslover";
import logo from "../../assets/img/logo/logo.png";
import PdfViewerModal from "../../common/pdfViewer/PdfViewer";

export default function Header() {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const headerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal(!showModal);

  const menuItems = [
    { label: "Home", route: routeConstants.HOME, id: "home" },
    { label: "About", route: routeConstants.ABOUT_ME, id: "about" },
    { label: "Service", route: routeConstants.SERVICE_LIST, id: "services" },
    {
      label: "Portfolio",
      route: routeConstants.PORTFOLIO_LIST,
      id: "portfolio",
    },
    { label: "Achievements", route: routeConstants.REWARD_CERTIFICATES, id: "achievements" },
    // { label: "Blog", route: routeConstants.BLOG, id: "blog" }, // optional
    { label: "Contact", route: routeConstants.CONTACT_US, id: "contact" },
  ];

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

 const renderMenuLinks = (isMobile = false) =>
  menuItems.map((item) => (
    <li
      key={item.id}
      className={isMobile ? "offcanvas__menu_li" : "header__menu--items"}
    >
      {isMobile ? (
        <NavLink
          className={({ isActive }) =>
            isActive ? "offcanvas__menu_item active" : "offcanvas__menu_item"
          }
          to={item.route}
          onClick={() => setIsOffcanvasOpen(false)}
        >
          {item.label}
        </NavLink>
      ) : (
        <NavLink
          className={({ isActive }) =>
            isActive ? "header__menu--link active" : "header__menu--link"
          }
          to={item.route}
        >
          {item.label}
        </NavLink>
      )}
    </li>
  ));

  const renderDownloadButton = (isMobile = false) => (
    <>
      <button
        className="secondary__btn download__btn d-flex align-items-center justify-content-center gap-2"
        onClick={()=>{
          toggle()
          setIsOffcanvasOpen(false)
        }}
      >
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
        View CV
      </button>

      <button
        className="primary__btn download__btn"
        onClick={() => downloadFile(CV_URL, "vivek_resume.pdf")}
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
        Download CV
      </button>
    </>
  );

  return (
    <>
      {/* Desktop Header */}
      <header className="header__section header__transparent">
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
                      style={{ height: "50px", width: "157px" }}
                    />
                    <img
                      className="main__logo--img logo_dark"
                      src={logo}
                      alt="logo-img"
                      style={{ height: "50px", width: "157px" }}
                    />
                  </Link>
                </h1>
              </div>

              {/* Mobile Menu Button */}
              <div className="offcanvas__header--menu__open">
                <div
                  className="offcanvas__header--menu__open--btn"
                  onClick={() => setIsOffcanvasOpen(true)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ionicon offcanvas__header--menu__open--svg"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeMiterlimit="10"
                      strokeWidth="32"
                      d="M80 160h352M80 256h352M80 352h352"
                    />
                  </svg>
                  <span className="visually-hidden">Offcanvas Menu Open</span>
                </div>
              </div>

              {/* Desktop Menu */}
              <div className="main__header--right d-flex align-items-center d-none d-lg-block">
                <div className="header__menu menu_border--none">
                  <nav className="header__menu--navigation">
                    <ul className="header__menu--wrapper d-flex">
                      {renderMenuLinks(false)}
                    </ul>
                  </nav>
                </div>
                {renderDownloadButton(false)}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Offcanvas Menu */}
      {isOffcanvasOpen && (
        <div className="offcanvas__header open">
          <div className="offcanvas__inner">
            <div className="offcanvas__logo">
              <Link className="offcanvas__logo_link" to={routeConstants.HOME}>
                <img src={logo} alt="Logo-img" width="158" height="36" />
              </Link>
              <button
                className="offcanvas__close--btn"
                onClick={() => setIsOffcanvasOpen(false)}
              >
                Close
              </button>
            </div>
            <nav className="offcanvas__menu">
              <ul className="offcanvas__menu_ul">{renderMenuLinks(true)}</ul>
              <div className="offcanvas__download--btn">
                {renderDownloadButton(true)}
              </div>
            </nav>
          </div>
        </div>
      )}
      {showModal && (
        <PdfViewerModal
          showModal={showModal}
          toggle={toggle}
          isDownload={true}
          title={"CV View"}
          fileUrl= "https://drive.google.com/file/d/1xCxwj7C-KF1PIBAaEwhxz0f5RUCNyOhT/preview"
          isIframeShow={true}
        />
      )}
    </>
  );
}
