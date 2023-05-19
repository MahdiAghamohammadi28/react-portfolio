import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { testimonials } from "../../Data";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";

import "swiper/css";
import "swiper/css/effect-cards";

import "./Testimonial.css";

const Testimonial = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials_container">
        <motion.div
          className="testimonials_title-container"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="section_title">testimonials</h2>
          <span className="section_subtitle">my customers say</span>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Swiper
            className="testimonial_slider"
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
          >
            {testimonials.map(({ id, img, firstName, lastName, text }) => {
              return (
                <SwiperSlide className="testimonial_slide" key={id}>
                  <div className="testimonial_user">
                    <img src={img} alt="" className="testimonial_img" />
                    <h3 className="testimonial_name">
                      <span className="testimonial_first-name">
                        {firstName}
                      </span>
                      <span className="testimonial_last-name">{lastName}</span>
                    </h3>
                  </div>
                  <p className="testimonial_text">{text}</p>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
