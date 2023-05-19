import React from "react";
import { ArrowRight } from "@phosphor-icons/react";
import { motion } from "framer-motion";
import "./Items.css";

const Items = ({ projectItems }) => {
  return (
    <div className="items">
      {projectItems.map((projectItem) => {
        const { id, img, category, title } = projectItem;
        return (
          <motion.div
            layout
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0.8, scale: 0.6 }}
            exit={{ opacity: 0.8, scale: 0.6 }}
            transition={{ duration: 0.3 }}
            className="project_item"
            key={id}
          >
            <div className="project_img-container">
              <img src={img} alt="Project Image" className="project_img" />
            </div>
            <div className="project_content">
              <span className="project_category">{category}</span>
              <h2 className="project_title">{title}</h2>
              <a href="#" className="project_link">
                See Demo <ArrowRight className="project_icon" />
              </a>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Items;
