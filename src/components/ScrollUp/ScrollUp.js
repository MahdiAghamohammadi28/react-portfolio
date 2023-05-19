import React from "react";
import { CaretUp } from "@phosphor-icons/react";
import "./ScrollUp.css";

const ScrollUp = () => {
  window.addEventListener("scroll", () => {
    const scrollup = document.querySelector(".scrollup");
    if (window.scrollY >= 460) {
      scrollup.classList.add("show_scroll");
    } else {
      scrollup.classList.remove("show_scroll");
    }
  });
  return (
    <div className="scrollup">
      <a href="#">
        <CaretUp weight="bold" className="scroll_icon" />
      </a>
    </div>
  );
};

export default ScrollUp;
