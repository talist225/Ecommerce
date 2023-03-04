import React from "react";
import "./contactPage.css";

const ContactPage = () => {
  return (
    <>
      <h1 className="text-center contact-title">צרו קשר</h1>
      <div className="col-sm-12">
        <div className="text-center mt-5">זמינים באמצעי המדיה הבאים:</div>
        <div className="contact-icons d-flex align-items-center justify-content-center gap-30 mt-5">
          <a href="http://wa.me/972543034877">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
          <a href="http://www.facebook.com/talyaakov">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="http://www.instagram.com/talyaakov225">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
        <div className="mt-5 contact-mail text-center">
          <span className="fw-bold mt-1">גם במייל:</span>
          <a
            href="mailto:talist225@gmail.com"
            className="mt-2 d-block mb-1 text-success"
          >
            talist225@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
