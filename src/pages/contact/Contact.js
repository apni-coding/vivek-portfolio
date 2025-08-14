import React, { useState } from "react";
import "./contact.scss";
import DetailPageHeader from "../header/DetailPageHeader";
import { POST } from "../../services/axiosRequestHandler";
import { API_END_POINT } from "../../utils/apiEndPoints";
import Swal from "sweetalert2";
export default function Contact({ isHomePage }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Prevent starting with space for name and message
    if ((name === "name" || name === "message") && value.startsWith(" ")) {
      return;
    }

    // Prevent typing invalid email characters
    if (name === "email") {
      if (value.startsWith(" ")) return;
      // Allow any char but check validity later
    }

    setFormData({ ...formData, [name]: value });
  };

  const isFormValid =
    formData.name.trim() &&
    isEmailValid(formData.email) &&
    formData.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) return;
    const payload = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };
    setLoading(true);
    try {
      await POST(API_END_POINT.CONTACT_US, payload);
      // Reset form after success
      setFormData({ name: "", email: "", message: "" });
      Swal.fire({
        title: "Message Sent!",
        text: "Thank you for contacting us. We'll get back to you soon.",
        icon: "success",
        confirmButtonText: "Close",
      });
    } catch (error) {
      Swal.fire({
        title: "Oops!",
        text:
          error?.response?.data?.message ||
          "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonText: "Okay",
      });
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {!isHomePage && (
        <>
          <DetailPageHeader />
          <div class="page__heading">
            <h1 className="page__heading--title">CONTACT ME</h1>
            <h2 className="page__heading--subtitle">
              CONTACT <span>ME</span>
            </h2>
          </div>
        </>
      )}
      <section
        // className={`${
        //   isHomePage
        //     ? "contact__section contact__section--bg"
        //     : "contact__section contact__page--style section--padding"
        // }`}
        className={`${
          isHomePage
            ? "contact__section contact__page--style section--padding"
            : "contact__section contact__page--style section--padding"
        }`}
        id="contact"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="contact__left">
                <div className="section__heading mb-50">
                  <span className="section__heading--subtitle text__secondary">
                    CONTACT
                  </span>
                  <h2 className="section__heading--title mb-10">
                    Get in Touch{" "}
                  </h2>
                  <p className="section__heading--desc">
                    Have a project in mind or just want to connect? Feel free to
                    reach out via phone, email, or the contact form below.
                  </p>
                </div>
                <form className="contact__form">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                      <input
                        className="contact__input--field"
                        placeholder="Your name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6 mb-30">
                      <input
                        className="contact__input--field"
                        placeholder="Your email"
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <textarea
                    className="contact__textarea--field"
                    placeholder="Message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <button
                    type="submit"
                    className="contact__button primary__btn"
                    disabled={!isFormValid || loading}
                    onClick={handleSubmit}
                  >
                    {loading ? (
                      <span className="spinner"></span>
                    ) : (
                      "Send Request"
                    )}
                  </button>
                </form>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact__info">
                <div className="contact__info--items d-flex align-items-center">
                  <span className="contact__info--icon">
                    <svg
                      width="25"
                      height="34"
                      fill="currentColor"
                      stroke="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path>
                    </svg>
                  </span>
                  <div className="contact__info--content">
                    <h3 className="contact__info--title">Call Me</h3>
                    <p className="contact__info--desc">
                      <a href="tel:++917292932052">+91-7292932052</a> <br />
                    </p>
                  </div>
                </div>
                <div className="contact__info--items d-flex align-items-center">
                  <span className="contact__info--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div className="contact__info--content">
                    <h3 className="contact__info--title">Email Us</h3>
                    <p className="contact__info--desc">
                      <a href="mailto:vivek7292932052@gmail.com">
                        vivek7292932052@gmail.com
                      </a>{" "}
                      <br />
                      <a href="mailto:contact@apnicoding.in">
                        contact@apnicoding.in
                      </a>
                    </p>
                  </div>
                </div>
                <div className="contact__info--items d-flex align-items-center">
                  <span className="contact__info--icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="feather feather-mail"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </span>
                  <div className="contact__info--content">
                    <h3 className="contact__info--title">Address</h3>
                    <p className="contact__info--desc">
                      Sec-58, <br />
                      Nodia, UP
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
