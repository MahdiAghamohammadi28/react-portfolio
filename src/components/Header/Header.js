import React, { useState } from "react";
import { Link } from "react-scroll";
import {
  House,
  User,
  Sparkle,
  CirclesThreePlus,
  Desktop,
  ChatDots,
  List,
  X,
} from "@phosphor-icons/react";
import "./Header.css";

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <h2 className="nav_logo">portfolio</h2>
        <div className={toggleNav ? "nav_menu show_modal" : "nav_menu"}>
          <ul className="nav_links">
            <li>
              <Link
                to="home"
                className="nav_link"
                activeClass="active_link"
                spy={true}
                smooth={true}
              >
                <House weight="bold" className="nav_link-icon" />
                home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="nav_link"
                activeClass="active_link"
                spy={true}
                smooth={true}
              >
                <User weight="bold" className="nav_link-icon" />
                about
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                className="nav_link"
                activeClass="active_link"
                spy={true}
                smooth={true}
              >
                <Sparkle weight="bold" className="nav_link-icon" />
                skills
              </Link>
            </li>
            <li>
              <Link
                to="services"
                className="nav_link"
                activeClass="active_link"
                spy={true}
                smooth={true}
              >
                <CirclesThreePlus weight="bold" className="nav_link-icon" />
                services
              </Link>
            </li>
            <li>
              <Link
                to="portfolio"
                className="nav_link"
                activeClass="active_link"
                spy={true}
                smooth={true}
              >
                <Desktop weight="bold" className="nav_link-icon" />
                portfolio
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="nav_link"
                activeClass="active_link"
                spy={true}
                smooth={true}
              >
                <ChatDots weight="bold" className="nav_link-icon" />
                contact
              </Link>
            </li>
          </ul>
          <X
            className="nav_close"
            weight="bold"
            onClick={() => setToggleNav(!toggleNav)}
          />
        </div>
        <div className="nav_toggle">
          <List weight="bold" onClick={() => setToggleNav(!toggleNav)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
