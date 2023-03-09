import React from "react";

import { Link } from "react-router-dom";
import "./footer.css";
import { Image } from "react-bootstrap";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container m-auto">
          <div className="row align-items-center newsletter">
            <div className="col-sm-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <i className="fa-regular fa-paper-plane"></i>
                <h2 className="mb-0 text-white">הירשמו לעדכונים ומבצעים</h2>
              </div>
            </div>
            <div className="col-sm-7">
              <div className="input-group search-input">
                <span
                  className="input-group-text btn btn-dark p-2 "
                  id="basic-addon2"
                >
                  הרשמה
                </span>
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="כתובת המייל שלך"
                  aria-label="כתובת המייל שלך"
                  aria-describedby="basic-addon2"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container m-auto">
          <div className="row">
            <div className="col-sm-3  footer-logo">
              <Image
                src="images/tal-phone2.png"
                alt="טל-פון"
                fluid
                className="w-75"
              />
            </div>
            <div className="col-sm-3">
              <h4 className="text-white mb-4">צרו קשר</h4>
              <div>
                <address className="text-white">
                  מעלה אדומים <br />
                  רחוב X<br />
                </address>
                טלפון החנות:
                <a
                  href="tel:054-3034877"
                  className="mt-2 d-block mb-1 text-white"
                >
                  054-3034877
                </a>
                מייל:
                <a
                  href="mailto:talist225@gmail.com"
                  className="mt-2 d-block mb-1 text-white"
                >
                  talist225@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center gap-30">
                  <a href="http://wa.me/972543034877">
                    <i className="fa-brands fa-whatsapp"></i>
                  </a>
                  <a href="http://www.facebook.com/tal.yaakov">
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                  <a href="http://www.instagram.com/talyaakov225">
                    <i className="fa-brands fa-instagram"></i>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-3">
              <h4 className="text-white mb-4">מידע כללי</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/privacy-policy" className="text-white py-2 mb-1">
                  מדיניות פרטיות
                </Link>
                <Link to="/refund-policy" className="text-white py-2 mb-1">
                  מדיניות החזרים
                </Link>
                <Link to="/shipping-policy" className="text-white py-2 mb-1">
                  מדיניות משלוחים
                </Link>
                <Link to="/terms-conditions" className="text-white py-2 mb-1">
                  תנאים והגבלות
                </Link>
              </div>
            </div>
            <div className="col-sm-3">
              <h4 className="text-white mb-4">משתמש</h4>
              <div className="footer-links d-flex flex-column">
                <Link to="/login" className="text-white py-2 mb-1">
                  התחברות
                </Link>
                <Link to="/store" className="text-white py-2 mb-1">
                  חנות
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container m-auto">
          <div className="row">
            <div className="col-sm-12">
              <p className="text-center mb-0 text-white">
                כל הזכויות שמורות לטל יעקב ©
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
