import React from "react";
import whatsappLogo from "../../assets/img/other/whatsapp.png";
import callLogo from "../../assets/img/other/call.png";
import emailLogo from '../../assets/img/other/email.png'
const ContactOptions = () => {
  return (
    <div className="contact-info">
      <a href="mailto:vivek7292932052@gmail.com?subject=Portfolio%20Enquiry&body=Hi%20Vivek,">
        <img src={emailLogo} alt="Send Email" />
      </a>

      <a
        href="https://wa.me/917292932052?text=Hi%20Vivek,%20I%20visited%20your%20portfolio"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={whatsappLogo} alt="" />
      </a>
      <a href="tel:+917292932052">
        <img src={callLogo} alt="Call Me" />
      </a>
    </div>
  );
};

export default ContactOptions;
