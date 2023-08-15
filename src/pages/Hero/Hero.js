/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable-next-line jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//Animation
import TextTransition, { presets } from "react-text-transition";
// import Typical from "react-typical";
import Typewriter from "typewriter-effect";
import Magnifier from "react-magnifier";

// Material Ui Icons
import GroupAddIcon from "@material-ui/icons/GroupAdd";
import ImportantDevicesIcon from "@material-ui/icons/ImportantDevices";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import PaymentsIcon from "@mui/icons-material/Payments";
import WorkIcon from "@mui/icons-material/Work";

//React Icons
import { FiFacebook } from "react-icons/fi";
import { GrLinkedinOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

//files
import "./Hero.css";

//Images Import
import images from "../../assets/pic1.png";
import images2 from "../../assets/pic2.png";
import images3 from "../../assets/pic3.png";
import images4 from "../../assets/pic4.svg";
import images5 from "../../assets/pic5.svg";
import Blog1 from "../../assets/blog-01.jpg";
import Blog2 from "../../assets/blog-02.jpg";
import Blog3 from "../../assets/blog-03.jpg";
import Project from "../../assets/portfolio-1.jpg";
import interview1 from "../../assets/interview.jpg";

const TEXTS = ["Unlimited Opportunities.", "Students.", "Internship."];

// const TEXTS = ["Unlimited Opportunities"];

const Hero = () => {
  //Use State for the Text Transition
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Defining animation transition intervals
    const intervalId = setInterval(() => setIndex((index) => index + 1), 1700);

    return () => clearTimeout(intervalId);
  }, []);

  //   useEffect(() => {
  //     Aos.init({ duration: 2500 });
  //   }, []);
  return (
    <div className="hero">
      <div className="hero-container " id="#">
        <div className="container">
          <div className="row">
            <div className="inner__text">
              <h3 data-aos="fade-up" data-aos-duration="3000">
                Welcome To My Antana
              </h3>
              <h1 data-aos="fade-left" data-aos-duration="3500">
                Where Creating Amazing Opportunities and great professional
                adventure in tech awaits .
              </h1>
              <h1 className="special" data-aos="fade-right">
                <TextTransition
                  text={TEXTS[index % TEXTS.length]}
                  springConfig={presets.slow}
                />
              </h1>
              <div className="resume">
                <Link to="/register" className="link">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* =================Benefits=================== */}
      <div className="Benefits">
        <div className="title-heading">
          <h2 className="heading-2">
            <span style={{ fontSize: "1.5rem" }}>See</span> the {""}
            <br></br>
            <div className="typewritter-text">
              <Typewriter
                loop={Infinity}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Benefits")
                    // .callFunction(() => {
                    //   console.log("String typed out!");
                    // })
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("Advantages")
                    // .callFunction(() => {
                    //   console.log("All strings were deleted");
                    // })

                    .start();
                }}
              />
            </div>
            <hr />
            you can get by working with our application core features
          </h2>
        </div>
      </div>
      {/* ================Services============================ */}
      <div id="services" className="theme">
        <div className="services-center container" data-aos="fade-right">
          {/* ==============Services Section 1=================  */}
          <div className="services">
            <span>
              <ImportantDevicesIcon style={{ fontSize: "4rem" }} />
            </span>
            <h1 className="head-title">Interview Success</h1>
            <p className="card-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          {/* ==============Services Section 2=================  */}
          <div className="services">
            <span>
              <LaptopMacIcon style={{ fontSize: "4rem" }} />
            </span>
            <h1 className="head-title">Web Development Process</h1>
            <p className="card-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          {/* ==============Services Section 3=================  */}
          <div className="services">
            <span>
              <GroupAddIcon style={{ fontSize: "4rem" }} />
            </span>
            <h1 className="head-title">Hiring Process </h1>
            <p className="card-p">
              Good Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          {/* ==============Services Section 4=================  */}
          <div className="services">
            <span>
              <PersonAddAlt1Icon style={{ fontSize: "4rem" }} />
            </span>
            <h1 className="head-title">Recruitment Process </h1>
            <p className="card-p">
              Good Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          {/* ==============Services Section 5=================  */}
          <div className="services">
            <span>
              <PaymentsIcon style={{ fontSize: "4rem" }} />
            </span>
            <h1 className="head-title">Payment Process </h1>
            <p className="card-p">
              Good Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
          {/* ==============Services Section 6=================  */}
          <div className="services">
            <span>
              <WorkIcon style={{ fontSize: "4rem" }} />
            </span>
            <h1 className="head-title">Job Opportunites </h1>
            <p className="card-p">
              Good Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </p>
          </div>
        </div>
      </div>
      {/* Companies */}
      <div className="heading">
        <div className="heading-text">
          <h1
            className="h1-text"
            style={{
              fontFamily: "Playfair Display, serif",
              marginBottom: "20px",
            }}
          >
            <span style={{ color: "#f9004d" }}>Want</span> to work on{" "}
            <span style={{ color: "#f9004d" }}>this</span> companies ?
          </h1>
          <p>
            Do you desire to work in this companies below, Join us to be
            prepared and pass for their interviews effectively,
          </p>
          <div className="resume">
            <Link to="/register" className="link font">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Sign In
            </Link>
          </div>
        </div>
      </div>
      <div className="images-icons">
        <div className="images-grids">
          <img src={images} alt="" />
        </div>
        <div className="images-grids">
          <img src={images2} alt="" />
        </div>
        <div className="images-grids">
          <img src={images3} alt="" />
        </div>
        <div className="images-grids">
          <img src={images4} alt="" />
        </div>
        <div className="images-grids">
          <img src={images5} alt="" />
        </div>
      </div>
      {/* Meet the Teams */}
      <section className="team">
        <h1 className="Big-text">Our Team </h1>
        <div className="team-container">
          <div className="team-row">
            <div className="col-md-3 profile">
              <div className="img-box">
                <img src={Blog1} alt="" className="img-responsive" />
                <ul>
                  <a href="https://youtube.com">
                    <li>
                      <FiFacebook />
                    </li>
                  </a>
                  {/* Twitter */}
                  <a href="https://youtube.com">
                    <li>
                      <FaTwitter />
                    </li>
                  </a>
                  {/* Linkedin */}
                  <a href="https://youtube.com">
                    <li>
                      <GrLinkedinOption />
                    </li>
                  </a>
                </ul>
              </div>
              <h2 className="Name-heading">Joel Angel</h2>
              <h3 className="Small-heading">Lead Frontend Engineer</h3>
              <p>
                a person who designs, builds, or maintains engines, machines, or
                structures.
              </p>
            </div>
            {/* Section 2 of teams */}
            <div className="col-md-3 profile ">
              <div className="img-box">
                <img src={Blog2} alt="" className="img-responsive" />
                <ul>
                  <a href="https://youtube.com">
                    <li>
                      <FiFacebook />
                    </li>
                  </a>
                  {/* Twitter */}
                  <a href="https://youtube.com">
                    <li>
                      <FaTwitter />
                    </li>
                  </a>
                  {/* Linkedin */}
                  <a href="https://youtube.com">
                    <li>
                      <GrLinkedinOption />
                    </li>
                  </a>
                </ul>
              </div>
              <h2 className="Name-heading">Frank Okari</h2>
              <h3 className="Small-heading">Lead Backend Engineer</h3>
              <p>
                a person who designs, builds, or maintains engines, machines, or
                structures.
              </p>
            </div>
            {/* Section 3 */}
            <div className="col-md-3 profile ">
              <div className="img-box">
                <img src={Blog3} alt="" className="img-responsive" />
                <ul>
                  <a href="https://youtube.com">
                    <li>
                      <FiFacebook />
                    </li>
                  </a>
                  {/* Twitter */}
                  <a href="https://youtube.com">
                    <li>
                      <FaTwitter />
                    </li>
                  </a>
                  {/* Linkedin */}
                  <a href="https://youtube.com">
                    <li>
                      <GrLinkedinOption />
                    </li>
                  </a>
                </ul>
              </div>
              <h2 className="Name-heading">Joel Angel</h2>
              <h3 className="Small-heading">Lead Frontend Engineer</h3>
              <p>
                a person who designs, builds, or maintains engines, machines, or
                structures.
              </p>
            </div>
            {/* Section 4 */}
            <div className="col-md-3 profile ter">
              <div className="img-box">
                <img src={Project} alt="" className="img-responsive" />
                <ul>
                  <a href="https://youtube.com">
                    <li>
                      <FiFacebook />
                    </li>
                  </a>
                  {/* Twitter */}
                  <a href="https://youtube.com">
                    <li>
                      <FaTwitter />
                    </li>
                  </a>
                  {/* Linkedin */}
                  <a href="https://youtube.com">
                    <li>
                      <GrLinkedinOption />
                    </li>
                  </a>
                </ul>
              </div>
              <h2 className="Name-heading">Joel Angel</h2>
              <h3 className="Small-heading">Lead Frontend Engineer</h3>
              <p>
                a person who designs, builds, or maintains engines, machines, or
                structures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* State Workspace */}
      <div className="section-a">
        <div className="container ">
          <div className="texts ">
            <h4 className="same-title">A state Of the Art Workspace</h4>
            <h1 className="large-font">Test Assessment & Preparation</h1>
            <p className="height">
              We loved designing this entire series of labels for Singapore
              based Arie Kombucha. The label's philosoply concerning fresh and
              energetic Ingredients was key when creating this lively and
              colourful universe"
            </p>

            <div className="resume">
              <Link to="/register" className="link font">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Get Started
              </Link>
            </div>
          </div>
          <div>
            <img src={interview1} alt="" />
            {/* <Magnifier src={interview1} alt="interview-pic" width={500} /> */}
          </div>
        </div>
      </div>
      {/* Section 2 for the Workspace */}
      <div className="section-a">
        <div className="container" style={{ background: "#191919" }}>
          <div className="img">
            <img src={interview1} alt="" />
          </div>
          <div className="texts ">
            <h4 className="same-title">
              Get Prepared with the Assignments we have
            </h4>
            <h1 className="large-font">Haven't prepared, No worries, </h1>
            <p className="height" style={{ color: "white" }}>
              We loved designing this entire series of labels for Singapore
              based Arie Kombucha. The label's philosoply concerning fresh and
              energetic Ingredients was key when creating this lively and
              colourful universe"
            </p>

            <div className="resume">
              <Link to="/register" className="link font">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Get Started
              </Link>
            </div>
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
  );
};

export default Hero;
