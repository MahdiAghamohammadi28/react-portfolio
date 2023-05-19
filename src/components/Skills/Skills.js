import React from "react";
import Languages from "../Skills/Languages/Languages";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";
import "./Skills.css";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills_container">
        <motion.div
          className="skills_title-container"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="section_title">Skills</h2>
          <span className="section_subtitle">my technical skills</span>
        </motion.div>
        <div className="skills_content">
          <Languages />
        </div>
      </div>
    </section>
  );
};

export default Skills;
