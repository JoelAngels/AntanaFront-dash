import React from "react";

const Footer = () => {
  return (
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
  );
};

export default Footer;
