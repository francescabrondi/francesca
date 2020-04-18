import React from "react";
import "./style.scss";

const projects = () => {
  return (
    <div className="projects">
      <hr />
      <h1>Projects</h1>
      <div className="list">
        <div className="bruxelles">
          <a href="https://travelblog-project.netlify.app/" target="blank">
            <img src="./bruxelles.png" alt="Bruxelles website" />
          </a>
        </div>
        <div className="cockney">
          <a href="https://english-to-cockney.netlify.app/" target="blank">
            <img src="./cockney.png" alt="English to cockney traslator" />
          </a>
        </div>
        <div className="foodhub">
          <a href="https://foodhub-project.netlify.app/" target="blank">
            <img src="./foodhub.png" alt="Foodhub project" />
          </a>
        </div>
        <div className="kiddos">
          <a href="https://kiddos-website.netlify.app/" target="blank">
            <img src="./kiddos.png" alt="Kiddos project" />
          </a>
        </div>
      </div>
      <h1>In progress</h1>
      <div className="progress">
        <img src="./spin.png" alt="" />
        <img src="./recipes.png" alt="" />
        <img src="./vantea.png" alt="" />
      </div>
    </div>
  );
};

export default projects;
