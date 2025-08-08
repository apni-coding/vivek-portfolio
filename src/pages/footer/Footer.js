import React from "react";
import "./footer.scss";
export default function Footer() {
  return (
    <>
      <footer className="footer footer__section footer__bg">
        <div className="container">
          <div className="main__footer d-flex justify-content-between align-items-center">
            <p className="copyright__content mb-0">
              Copyright © 2025 <span></span> by{" "}
              <span>
                <a
                  className="text__secondary"
                  href="https://apnicoding.in/"
                  target="_blank"
                >
                  Apni Coding.
                </a>
              </span>{" "}
              All Rights Reserved.
            </p>
            <ul className="footer__menu d-flex">
              <li>
                <a
                  className="footer__menu--link"
                  href="https://apnicoding.in/terms&condition"
                  target="_blank"
                >
                  Terms & Condition
                </a>
              </li>
              <li>
                <a
                  className="footer__menu--link"
                  href="https://apnicoding.in/privacy-policy"
                  target="_blank"
                >
                  {" "}
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
