/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable-next-line jsx-a11y/anchor-is-valid */

//Importing React
import React from "react";

//React Icons
import { TiGroup } from "react-icons/ti";
import { MdAutoGraph } from "react-icons/md";
import { GiTeamDowngrade } from "react-icons/gi";
import { GiRotaryPhone } from "react-icons/gi";

//Files
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-sec">
        <div className="about-section" id="#">
          <div className="aboutsec-container">
            <div className="about-row">
              <div className="about-inner__text">
                <h3>Get To Know Us</h3>
              </div>
              {/* Grid System */}
              <div className="about-grids">
                <div className="about-grid">
                  <span className="icons">
                    <TiGroup />
                  </span>
                  <h1>LeaderShip</h1>
                  <p>
                    Our Multicultural leaders have deep start-up and enterprise
                    experience. with rich mobile and data expertise
                  </p>
                </div>

                {/* About-service 2 */}
                <div className="about-grid">
                  <span className="icons">
                    <MdAutoGraph />
                  </span>
                  <h1>Careers</h1>
                  <p>
                    We take great pride in our market leadership position,
                    thanks to the hard work of our incredibility talented
                  </p>
                </div>
                {/*About-service 2  */}
                <div className="about-grid">
                  <span className="icons">
                    <GiTeamDowngrade />
                  </span>
                  <h1>Partnerships</h1>
                  <p>
                    From research, to events, to platform partnerships, we work
                    with thought leaders to provide more actionable data
                  </p>
                </div>
                {/* About-service 3 */}
                <div className="about-grid">
                  <span className="icons">
                    <GiRotaryPhone />
                  </span>
                  <h1>Press</h1>
                  <p>
                    We are the forefront of the markets conversations and serve
                    as the most trusted, global source
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Mission Section */}
        <div className="mission-section">
          <div className="title">
            Our <span>Mission</span>
          </div>
          <div className="heading">
            We exist to spread economic opportunity more equitably around our
            country Kenya !
          </div>
          <div className="mid">
            <div className="word">
              Ever heard that frustration that you finished your tests in
              college or university and started looking for places where you
              could get internships, attachments, this times, you would decide
              to go to many companies on your own to ask if they offer
              internships, 80% of the result was a failure, or they didn't reach
              back to you, I'm sure it has happened to the most of us, The
              disappointment that you had going back home every single day after
              looking for opportunites everywhere, Well Antana has decided to
              solve that problem, Antana's mission is to build the Kenya's most
              impactful talent network ----- one that is user-owner, aligns
              incentives, and redistributes value to Talent and Organizations
            </div>
          </div>
        </div>
        {/* Footer */}
        <footer className="footer">
          <div className="l-footer">
            <h1>Redare With Antana</h1>
            <p>
              Sufficient particular impossible <br />
              by reasonable oh expression is
              <br /> Yet preference unpleasant
            </p>
            <i className="fab fa-facebook"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-instagram"></i>
          </div>
          <ul className="r-footer">
            <li>
              <h2 className="footer-h2">Tech Stack</h2>
              <ul className="box">
                <li>
                  <a href="#">Web Development</a>
                </li>
                <li>
                  <a href="#">Ios Development</a>
                </li>
                <li>
                  <a href="#">Android Development</a>
                </li>
                <li>
                  <a href="#">Frontend Development</a>
                </li>
                <li>
                  <a href="#">Backend Frontend</a>
                </li>
              </ul>
            </li>
            <li className="features">
              <h2 className="footer-h2">Categories</h2>
              <ul className="box h-box">
                <li>
                  <a href="#">Your Skills</a>
                </li>
                <li>
                  <a href="#">Applying</a>
                </li>
                <li>
                  <a href="#">Interview</a>
                </li>
                <li>
                  <a href="#"> Recruitment</a>
                </li>
              </ul>
            </li>
            <li>
              <h2 className="footer-h2">About Us</h2>
              <ul className="box">
                <li>
                  <a href="#">Who are you ?</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Help</a>
                </li>
              </ul>
            </li>
          </ul>
          <hr />

          <div className="b-footer">
            <p>&copy;Copyright Antana. All right reserved</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default About;
