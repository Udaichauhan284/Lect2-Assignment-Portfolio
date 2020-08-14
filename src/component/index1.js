import React from "react";
import "./index.css";

export default class index1 extends React.Component {
  render() {
    return (
      <div className="">
        <div className="banner-text">
          <h1>Front End Developer</h1>

          <p>
              Front-End Developer well-versed in numerous programming language like C++,Java, JavaScript.
              Curious to learn new things. Good knowledge of Data Structures.</p>
          <p>
            HTML/CSS | Bootstrap | JavaScript | React | NodeJS |
            Data Structures | Mysql | Java
          </p>
          <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/udaichauhan284" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="http://www.github.com/Udaichauhan284" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>
        </div>
      </div>
    );
  }
}
