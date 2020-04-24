import React from "react";

import "./style.scss";

const footer = () => {
  return (
    <div className="footer">
      <div className="cv">
        <a href="./curriculum.pdf" download>
          <p> Curriculum </p>
        </a>
      </div>
      <div className="socials">
        <a
          href="https://www.facebook.com/francesca.brondi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-facebook fa-2x"></i>
        </a>
        <a
          href="https://www.instagram.com/francescabrondi/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-instagram fa-2x"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/francesca-brondi-b86618127/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="mailto: francescabrondi@gmail.com">
          <i class="fas fa-envelope fa-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default footer;
