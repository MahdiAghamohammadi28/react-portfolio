import React from "react";
import { TwitterLogo, DribbbleLogo, GithubLogo } from "@phosphor-icons/react";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <div className="social_links">
      <a
        href="http://twitter.com"
        className="social_link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <TwitterLogo className="social_icon" />
      </a>
      <a
        href="http://dribbble.com"
        className="social_link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <DribbbleLogo className="social_icon" />
      </a>
      <a
        href="http://github.com"
        className="social_link"
        target="_blank"
        rel="noreferrer noopener"
      >
        <GithubLogo className="social_icon" />
      </a>
    </div>
  );
};

export default SocialMedia;
