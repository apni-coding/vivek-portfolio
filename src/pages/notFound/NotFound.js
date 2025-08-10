import React from "react";
import forOFor from "../../assets/icon/for_o_four.svg";
import "./notFound.scss";
import { useNavigate } from "react-router-dom";
import { routeConstants } from "../../constants/routeConstant";

export default function NotFound() {
  const navigate = useNavigate();
  return (
    <div className="not-found">
      <img
        className="not-found__image-full"
        src={forOFor}
        alt="404 Not Found"
      />
      <div className="not-found__overlay">
        <button
          className="primary__btn download__btn"
          onClick={() => {
            navigate(routeConstants.HOME);
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
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 9.5L12 3l9 6.5V21a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5H10v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z"></path>
          </svg>
          Go Home
        </button>
      </div>
    </div>
  );
}
