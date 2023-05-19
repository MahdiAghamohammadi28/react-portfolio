import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import html from "../../../assets/html5-logo-24.png";
import css from "../../../assets/css3-logo-24.png";
import js from "../../../assets/javascript-logo-24.png";
import react from "../../../assets/react-logo-24.png";
import wordpress from "../../../assets/wordpress-logo-24.png";
import git from "../../../assets/github-logo-24.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varient";
import "./Languages.css";

const Languages = () => {
  return (
    <motion.div
      className="langs"
      variants={fadeIn("left", 0.7)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="lang">
        <CircularProgressBar
          colorSlice="#3bc9db"
          fontColor="#fff"
          fontWeight={600}
          percent={70}
          round
          size={80}
          speed={100}
        ></CircularProgressBar>
        <div className="lang_title">
          <img src={html} className="lang_icon" alt="HTML Logo" />
          <span>HTML</span>
        </div>
      </div>
      <motion.div
        className="lang"
        variants={fadeIn("left", 0.9)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <CircularProgressBar
          colorSlice="#3bc9db"
          fontColor="#fff"
          fontWeight={600}
          percent={70}
          round
          size={80}
          speed={100}
        ></CircularProgressBar>
        <div className="lang_title">
          <img src={css} className="lang_icon" alt="CSS Logo" />
          <span>CSS</span>
        </div>
      </motion.div>
      <motion.div
        className="lang"
        variants={fadeIn("left", 1.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <CircularProgressBar
          colorSlice="#3bc9db"
          fontColor="#fff"
          fontWeight={600}
          percent={70}
          round
          size={80}
          speed={100}
        ></CircularProgressBar>
        <div className="lang_title">
          <img src={js} className="lang_icon" alt="JS Logo" />
          <span>JavaScript</span>
        </div>
      </motion.div>
      <motion.div
        className="lang"
        variants={fadeIn("left", 1.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <CircularProgressBar
          colorSlice="#3bc9db"
          fontColor="#fff"
          fontWeight={600}
          percent={70}
          round
          size={80}
          speed={100}
        ></CircularProgressBar>
        <div className="lang_title">
          <img src={react} className="lang_icon" alt="React Logo" />
          <span>React</span>
        </div>
      </motion.div>
      <motion.div
        className="lang"
        variants={fadeIn("left", 1.5)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <CircularProgressBar
          colorSlice="#3bc9db"
          fontColor="#fff"
          fontWeight={600}
          percent={70}
          round
          size={80}
          speed={100}
        ></CircularProgressBar>
        <div className="lang_title">
          <img src={wordpress} className="lang_icon" alt="Wordpress Logo" />
          <span>Wordpress</span>
        </div>
      </motion.div>
      <motion.div
        className="lang"
        variants={fadeIn("left", 1.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <CircularProgressBar
          colorSlice="#3bc9db"
          fontColor="#fff"
          fontWeight={600}
          percent={70}
          round
          size={80}
          speed={80}
        ></CircularProgressBar>
        <div className="lang_title">
          <img src={git} className="lang_icon" alt="Github Logo" />
          <span>Github</span>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Languages;
