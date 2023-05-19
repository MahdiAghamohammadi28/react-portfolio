import React from "react";
import PrimaryBtn from "../../Btns/PrimaryBtn";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../varient";
import "./FormInput.css";

const FormInput = () => {
  return (
    <div className="form">
      <motion.div
        className="input"
        variants={fadeIn("left", 0.7)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <label htmlFor="name" className="name_label">
          name
        </label>
        <input type="text" id="name" placeholder="your name" />
      </motion.div>
      <motion.div
        className="input"
        variants={fadeIn("left", 0.9)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <label htmlFor="email" className="email_label">
          email
        </label>
        <input type="email" id="email" placeholder="your email" />
      </motion.div>
      <motion.div
        className="text_area-input"
        variants={fadeIn("left", 1.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <label htmlFor="message" className="text_area-label">
          message
        </label>
        <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="write about your project"
          className="text_area"
        ></textarea>
      </motion.div>
      <motion.div
        variants={fadeIn("left", 1.3)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <PrimaryBtn>
          Send Message <PaperPlaneTilt size={20} />
        </PrimaryBtn>
      </motion.div>
    </div>
  );
};

export default FormInput;
