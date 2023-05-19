import React from "react";
import { Link } from "react-scroll";
import SocialMedia from "../Home/SocialMedia/SocialMedia";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_title">
          <h2>portfolio.</h2>
        </div>
        <div className="footer_content">
          <div>
            <ul className="footer_links">
              <li>
                <Link to="about" className="footer_link">
                  about
                </Link>
              </li>
              <li>
                <Link to="skills" className="footer_link">
                  skills
                </Link>
              </li>
              <li>
                <Link to="sevices" className="footer_link">
                  services
                </Link>
              </li>
              <li>
                <Link to="portfolio" className="footer_link">
                  portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer_social">
            <SocialMedia />
          </div>
          <div className="copyright">
            <p>&copy; 2023 All rights reserved. Mahdi Aghamohammadi.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
