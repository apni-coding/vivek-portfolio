import React from "react";
import "./loader.scss";

export default function Loader({ closing }) {
  return (
    <div id="preloader" className={closing ? "closing" : ""}>
      <div className="loader--border"></div>
    </div>
  );
}
