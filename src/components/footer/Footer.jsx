import React from "react";
import "./footer.css";
import fbImg from "./../../img/socials/fb.svg";
import instImg from "./../../img/socials/inst.svg";
import twImg from "./../../img/socials/tw.svg";
import inImg from "./../../img/socials/in.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-sections">
          <div className="footer-icons">
            <h1 className="footer-icons__title">FASHION</h1>
            <p className="footer-icons__desc">
              Complete your style with awesome clothes from us.
            </p>
            <div className="footer-icons__block">
              <img src={fbImg} alt="fb" />
              <img src={instImg} alt="inst" />
              <img src={twImg} alt="tw" />
              <img src={inImg} alt="in" />
            </div>
          </div>
          <div className="footer-contact">
            <div className="footer-contact__content">
              <h3 className="footer-contact__content-title">Company</h3>
              <a href="#!" className="footer-contact__content-txt">
                About
              </a>
              <a href="#!" className="footer-contact__content-txt">
                Contact us
              </a>
              <a href="#!" className="footer-contact__content-txt">
                Support
              </a>
              <a href="#!" className="footer-contact__content-txt">
                Careers
              </a>
            </div>

            <div className="footer-contact__content">
              <h3 className="footer-contact__content-title">Quick Link</h3>
              <a href="#!" className="footer-contact__content-txt">
                Share Location
              </a>
              <a href="#!" className="footer-contact__content-txt">
                Orders Tracking
              </a>
              <a href="#!" className="footer-contact__content-txt">
                Size Guide
              </a>
              <a href="#!" className="footer-contact__content-txt">
                FAQs
              </a>
            </div>

            <div className="footer-contact__content">
              <h3 className="footer-contact__content-title">Legal</h3>
              <a href="#!" className="footer-contact__content-txt">
                Terms & conditions
              </a>
              <a href="#!" className="footer-contact__content-txt">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
