import React from "react";
import { Certificate, Folders, Headset } from "@phosphor-icons/react";
import PrimaryBtn from "../../components/Btns/PrimaryBtn";
import CV from "../../assets/CV.pdf";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about_container">
        <motion.div
          className="about_title-container"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="section_title">about me</h2>
          <span className="section_subtitle">my introduction</span>
        </motion.div>
        <div className="about_content">
          <motion.div
            className="about_description"
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.p className="about_description-text">
              I'm a passionate and dedicated frontend developer, with 5 years of
              experience in HTML, CSS, JavaScript, React, Bootstrap, and UI/UX
              design. Over the years, I've had the opportunity to work with a
              variety of clients, ranging from small startups to large
              corporations. Whether I'm designing a website, developing an app,
              or creating a marketing campaign, I always strive to exceed my
              clients expectations and deliver high-quality work. In addition to
              my technical skills, I'm also a great communicator and
              collaborator. If you have any questions or would like to work
              together, please don't hesitate to reach out. I look forward to
              hearing from you!
            </motion.p>
            <div className="cv_download">
              <a href={CV} download="">
                <PrimaryBtn>Download CV</PrimaryBtn>
              </a>
            </div>
          </motion.div>
          <div className="about_services">
            <motion.div
              className="about_service-box"
              variants={fadeIn("right", 1.2)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Certificate className="about_service-icon" />
              <span className="about_service-title">experience</span>
              <span className="about_service-subtitle">+5 Years</span>
            </motion.div>
            <motion.div
              className="about_service-box flex"
              variants={fadeIn("right", 1.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Folders className="about_service-icon" />
              <span className="about_service-title">completed</span>
              <span className="about_service-subtitle">+30 Projects</span>
            </motion.div>
            <motion.div
              className="about_service-box flex"
              variants={fadeIn("right", 1.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <Headset className="about_service-icon" />
              <span className="about_service-title">support</span>
              <span className="about_service-subtitle">24/7 Online</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
