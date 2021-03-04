import React from "react";
import "./social-media.css";

class SocialMedia extends React.Component {
  render() {
    return (
      <a
        href="https://www.linkedin.com/in/lautaronasello/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://jesuslencina.vercel.app/assets/contact/linkedin.png"
          alt="LinkedIn"
          srcset=""
          className="mt-5"
        />
      </a>
    );
  }
}

export default SocialMedia;
