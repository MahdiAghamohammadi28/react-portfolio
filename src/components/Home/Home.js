import React from "react";
import { Link } from "react-scroll";
import { PaperPlaneTilt } from "@phosphor-icons/react";
import PrimaryBtn from "../Btns/PrimaryBtn";
import userImage from "../../assets/user-1.png";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";
import SocialMedia from "./SocialMedia/SocialMedia";
import "./Home.css";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home_container">
        <motion.div className="user_info">
          <motion.div
            className="user_photo"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <img src={userImage} alt="User Image" className="user_image" />
          </motion.div>
          <motion.div
            className="user_content"
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <p className="sup_title">
              hello, <span>my name is</span>
            </p>
            <div className="user_name">
              <span className="first_name">Jane</span>
              <span className="last_name">Doe</span>
            </div>
            <div className="social_links">
              <SocialMedia />
            </div>
          </motion.div>
        </motion.div>
        <div className="user_description">
          <motion.p
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            I'm a passionate frontend developer with 5 years of experience in
            the field. I specialize in creating user-friendly and visually
            appealing web designs that engage and delight users.
          </motion.p>
          <motion.div
            className="home_btns"
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <Link to="contact" spy={true} smooth={true}>
              <PrimaryBtn>
                Conatct Me <PaperPlaneTilt weight="bold" />
              </PrimaryBtn>
            </Link>

            <Link to="portfolio" spy={true} smooth={true}>
              <span className="portfolio_btn">portfolio</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
