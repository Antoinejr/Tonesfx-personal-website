import React, { useRef } from "react";
import "./Home.css";
import resume from "../../assets/Anthony_Irokosu_Resume.pdf";

function Home() {
  // hooks
  const scrollRef = useRef([]);

  // functions
  function scrollIntoView(index) {
    scrollRef.current[index].scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  }

  return (
    <div className="container">
      <div className="header">
        <div className="topHeader">
          <div className="topHeader-wrapper">
            <h3>Archetype Anthony</h3>
          </div>
        </div>
        <nav className="menuHeader">
          <ul className="menu">
            <li
              className="menu-item"
              onClick={function () {
                scrollIntoView(0);
              }}
            >
              Bio
            </li>
            <li
              className="menu-item"
              onClick={function () {
                scrollIntoView(1);
              }}
            >
              Resume
            </li>
            <li className="menu-item">
              <a
                href="https://myanimelist.net/profile/Senot"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAL
              </a>
            </li>
            <li className="menu-item">
              <a
                href="https://github.com/Antoinejr?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="main">
        <div
          className="sectionBio"
          ref={function (el) {
            scrollRef.current[0] = el;
          }}
        >
          <h2>Bio</h2>
          <p className="bio">
            I am interested and fascinated by how people interact with
            technology. I have a deep interest in pushing for more accessible
            and usage of technologies. I also have crippling anime addiction and
            a love for for pokemon music. Mai best
          </p>
        </div>
        <div
          className="sectionCv"
          ref={function (el) {
            scrollRef.current[1] = el;
          }}
        >
          <h2>Resume</h2>
          <embed className="cresume" src={resume} type="application/pdf" />
          <div className="download-wrapper">
            <a href={resume} download="Anthony_Irokosu_Resume.pdf">
              <span className="downloadBtn">PDF Download</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="socials">
          <ul className="footer-menu">
            <li className="footer-menu-item">
              <a
                a
                href="https://www.instagram.com/tones.fx/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li className="footer-menu-item">
              <a
                href="https://www.linkedin.com/in/anthony-irokosu-7b7984282/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="footer-menu-item">
              <a
                href="https://www.youtube.com/watch?v=F_8hbv3G1Q8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </li>
          </ul>
          </div>
      </div>
    </div>
  );
}

export default Home;
