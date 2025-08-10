import React, { useEffect, useState } from "react";
import "./noInterent.scss"; 

export default function NoInternet() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setIsOnline(true);
    const goOffline = () => setIsOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  if (isOnline) return null;

  return (
    <div className="no-internet">
      <div className="no-internet__content">
        <div className="no-internet__icon">📡</div>
        <h1 className="no-internet__title">No Internet Connection</h1>
        <p className="no-internet__message">
          Please check your network and try again.
        </p>

        <button
          className="primary__btn download__btn"
          onClick={() => window.location.reload()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="download__btn--svg"
          >
            <polyline points="23 4 23 10 17 10"></polyline>
            <polyline points="1 20 1 14 7 14"></polyline>
            <path d="M3.51 9a9 9 0 0 1 14.13-3.36L23 10M1 14l5.36 5.36A9 9 0 0 0 20.49 15"></path>
          </svg>
          Reload Page
        </button>
      </div>
    </div>
  );
}
