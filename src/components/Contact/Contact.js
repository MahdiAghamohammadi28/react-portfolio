import React from "react";
import {
  Envelope,
  WhatsappLogo,
  TelegramLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import FormInput from "./FormInput/FormInput";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";
import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact_container">
        <motion.div
          className="contact_title-container"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="section_title">contact Me</h2>
          <span className="section_subtitle">get in touch</span>
        </motion.div>
        <div className="contact_content">
          <div className="talk">
            <motion.div
              className="talk_box"
              variants={fadeIn("right", 0.5)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="talk_box-title">
                <Envelope className="talk_box-icon" />
                email
              </h3>
              <span className="talk_subtitle">portfolio@info.com</span>
              <a
                href="mailto:portfolio@info.com"
                className="talk_box-link flex"
              >
                {" "}
                mail to me <ArrowRight className="talk_box-link--icon" />
              </a>
            </motion.div>
            <motion.div
              className="talk_box"
              variants={fadeIn("right", 0.8)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="talk_box-title">
                <WhatsappLogo className="talk_box-icon" />
                whatsapp
              </h3>
              <span className="talk_subtitle">912-345-6789</span>
              <a href="tel:+989123456789" className="talk_box-link flex">
                text to me <ArrowRight className="talk_box-link--icon" />
              </a>
            </motion.div>
            <motion.div
              className="talk_box"
              variants={fadeIn("right", 1.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="talk_box-title">
                <TelegramLogo className="talk_box-icon" />
                telegram
              </h3>
              <span className="talk_subtitle">@username</span>
              <a href="tel:+989123456789" className="talk_box-link flex">
                write to me <ArrowRight className="talk_box-link--icon" />
              </a>
            </motion.div>
          </div>
          <FormInput />
        </div>
      </div>
    </section>
  );
};

export default Contact;
