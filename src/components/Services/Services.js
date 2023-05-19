import React, { useState } from "react";
import {
  Browsers,
  Layout,
  CaretRight,
  PenNib,
  X,
  SealCheck,
} from "@phosphor-icons/react";
import Tooltip from "./Tooltip/Tooltip";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";
import "./Services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services" id="services">
      <div className="services_container">
        <motion.div
          className="services_title-container"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="section_title">services</h2>
          <span className="section_subtitle">my provided services</span>
        </motion.div>
        <div className="services_wraper">
          <motion.div
            className="services_content"
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <Browsers className="services_icon" />
              <h2 className="services_title">web development</h2>
            </div>
            <span className="services_btn" onClick={() => toggleTab(1)}>
              <CaretRight weight="bold" className="services_btn-icon" />
              view more
            </span>

            <div
              className={
                toggleState === 1
                  ? "services_modal active_modal"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <X
                  weight="bold"
                  className="services_modal-close"
                  onClick={() => {
                    toggleTab(0);
                  }}
                />
                <h3 className="services_modal-title">web development</h3>
                <p className="services_modal-description">
                  As a frontend developer, I specialize in designing and
                  developing the user interface of websites and applications. I
                  offer a wide range of services that can help you achieve your
                  online goals, including:
                </p>
                <ul className="services_modal-services">
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={"Coding Responsive Web Pages for All Devices"}
                      >
                        HTML/CSS Development
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={"Creating Dynamic and Interactive Elements"}
                      >
                        JavaScript Development
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={"Building Complex and Scalable Web Applications"}
                      >
                        Frontend Framework Development
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Ensuring Compatibility on All Major Web Browsers"
                        }
                      >
                        Cross-Browser Compatibility
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={"Optimizing User Interface for All Screen Sizes"}
                      >
                        Responsive Design
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Improving Website/Application Speed and Responsiveness"
                        }
                      >
                        Performance Optimization
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={"Ensuring Web Accessibility for All Users"}
                      >
                        Accessibility
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Creating Intuitive and User-Friendly Websites/Applications"
                        }
                      >
                        User Experience Design
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Providing Ongoing Support and Maintenance for Optimal Functionality"
                        }
                      >
                        Website Maintenance
                      </Tooltip>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="services_content"
            variants={fadeIn("up", 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <Layout className="services_icon" />
              <h2 className="services_title">UI/UX Design</h2>
            </div>
            <span
              className="services_btn"
              onClick={() => {
                toggleTab(2);
              }}
            >
              <CaretRight weight="bold" className="services_btn-icon" />
              view more
            </span>

            <div
              className={
                toggleState === 2
                  ? "services_modal active_modal"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <X
                  weight="bold"
                  className="services_modal-close"
                  onClick={() => {
                    toggleTab(0);
                  }}
                />
                <h3 className="services_modal-title">UI/UX Design</h3>
                <p className="services_modal-description">
                  As a UI/UX designer, I specialize in creating user-centered
                  and engaging designs for websites and applications. I offer a
                  wide range of services that can help you create a successful
                  online presence, including:
                </p>
                <ul className="services_modal-services">
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip data={"Understanding User Needs and Behaviors"}>
                        User Research
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Creating Low-Fidelity Designs for Information Architecture"
                        }
                      >
                        Wireframing
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={"Creating High-Fidelity Designs for User Testing"}
                      >
                        Prototyping
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Creating Aesthetically Pleasing and On-Brand Designs"
                        }
                      >
                        Visual Design
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Creating Intuitive and Engaging User Interactions"
                        }
                      >
                        Interaction Design
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={"Optimizing User Interface for All Screen Sizes"}
                      >
                        Responsive Design
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip data={"Validating Designs with Real Users"}>
                        User Testing
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={"Ensuring Web Accessibility for All Users"}
                      >
                        Accessibility
                      </Tooltip>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="services_content"
            variants={fadeIn("up", 1.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <div>
              <PenNib className="services_icon" />
              <h2 className="services_title">brand identity</h2>
            </div>
            <span
              className="services_btn"
              onClick={() => {
                toggleTab(3);
              }}
            >
              <CaretRight weight="bold" className="services_btn-icon" />
              view more
            </span>

            <div
              className={
                toggleState === 3
                  ? "services_modal active_modal"
                  : "services_modal"
              }
            >
              <div className="services_modal-content">
                <X
                  weight="bold"
                  className="services_modal-close"
                  onClick={() => {
                    toggleTab(0);
                  }}
                />
                <h3 className="services_modal-title">brand identity</h3>
                <p className="services_modal-description">
                  As a frontend developer, I can provide a range of branding
                  services to help businesses develop a strong and cohesive
                  brand identity online. Here are some of the branding services
                  I offer:
                </p>
                <ul className="services_modal-services">
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Design and develop a website that reflects a business's brand identity."
                        }
                      >
                        Website Design
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Create a comprehensive style guide for consistent design across platforms."
                        }
                      >
                        Style Guide Development
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Design a user interface that aligns with a business's branding."
                        }
                      >
                        UI Design
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Create brand-focused copy to effectively communicate with the target audience."
                        }
                      >
                        Copywriting
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Design social media graphics that align with a business's brand identity."
                        }
                      >
                        Social Media Design
                      </Tooltip>
                    </p>
                  </li>
                  <li className="services_modal_service">
                    <SealCheck weight="bold" className="services_modal-icon" />
                    <p className="services_modal-info">
                      <Tooltip
                        data={
                          "Design email templates that align with a business's brand identity and messaging."
                        }
                      >
                        Email Design
                      </Tooltip>
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
