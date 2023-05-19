import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import "./List.css";

const List = ({ list, filteredItem }) => {
  const [active, setActive] = useState(0);
  return (
    <motion.div className="list">
      {list.map((category, index) => {
        return (
          <button
            className={`${active === index ? "list_btn-active" : ""} list_btn`}
            key={index}
            onClick={() => {
              setActive(index);
              filteredItem(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </motion.div>
  );
};

export default List;
