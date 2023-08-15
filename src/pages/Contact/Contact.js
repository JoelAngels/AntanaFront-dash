/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable-next-line jsx-a11y/anchor-is-valid */

//Importing React
import React from "react";

//Files
import "./Contact.css";
import Footer from "../../components/Footer";
//Npm packages
// import Tilt from "react-parallax-tilt";

//React Icons
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { FaDiscord } from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="contact-page">
          <div className="contact-container">
            <div className="Texts">
              <div className="heading1">
                Contact <span>Us</span>
              </div>
              <div className="heading2">We're Here to Help You</div>
            </div>
            {/* Glass Container */}
            {/* <Tilt scale={1}> */}
            <div className="glass-container glass-two">
              {/* Card One */}
              <div className="carding">
                <div className="content">
                  <h2 className="icon-link">
                    <FaLinkedin />
                  </h2>
                  <h3 className="small-h3">Get Us On Linkedin</h3>
                  <p className="paragraphs-tripple">
                    Yours is the kingdom, yours is the power and yours is the
                    glory forever amen
                  </p>
                  <a
                    href="https://www.linkedin.com/in/joel-angel-/"
                    target="_blank"
                    rel="noreferrer"
                    className="linking"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              {/* Card 2*/}
              <div className="carding">
                <div className="content">
                  <h2 className="icon-link">
                    <GoMail />
                  </h2>
                  <h3 style={{ display: "inline-block" }} className="small-h3">
                    Connect with Us Today
                  </h3>
                  <p className="paragraphs-tripple">
                    Yours is the kingdom, yours is the power and yours is the
                    glory forever amen
                  </p>
                  <a
                    href="mailto:joelbaraka4325@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linking"
                  >
                    Email us
                  </a>
                </div>
              </div>
              {/* Card 3*/}
              <div className="carding">
                <div className="content">
                  <h2 className="icon-link">
                    <FaDiscord />
                  </h2>
                  <h3 className="small-h3">Join our community</h3>
                  <p className="paragraphs-tripple">
                    Yours is the kingdom, yours is the power and yours is the
                    glory forever amen
                  </p>
                  <a
                    href="https://discord.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linking"
                  >
                    Join Discord
                  </a>
                </div>
              </div>
            </div>
            {/* </Tilt> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
