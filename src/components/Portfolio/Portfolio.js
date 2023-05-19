import React from "react";
import { useState } from "react";
import List from "./List/List";
import Items from "./Items/Items";
import { projects } from "../../Data";
import { motion } from "framer-motion";
import { fadeIn } from "../../varient";
import "./Portfolio.css";

const allNavList = [
  "All",
  ...new Set(projects.map((project) => project.category)),
];

const Portfolio = () => {
  const [projectItems, setProjectItems] = useState(projects);
  const [navList, setNavList] = useState(allNavList);

  const filterItems = (category) => {
    if (category === "All") {
      setProjectItems(projects);
      return;
    }
    const newProjectItem = projects.filter(
      (item) => item.category === category
    );
    setProjectItems(newProjectItem);
  };

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio_container">
        <motion.div
          className="portfolio_title-container"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="section_title">Portfolio</h2>
          <span className="section_subtitle">my recent projects</span>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <List list={navList} filteredItem={filterItems} />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.9)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <Items projectItems={projectItems} />
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
