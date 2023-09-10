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
            {/* <li className="menu-item">
              <a
                href="https://myanimelist.net/profile/Senot"
                target="_blank"
                rel="noopener noreferrer"
              >
                MAL
              </a>
            </li> */}
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
          <div className="bio">
            <div className="descrip">
              Hello! I am Anthony, a software developer with a Bsc Computer
              science from the University of Twente.
            </div>
            <div className="descrip">
              I am deeply interested by the connection between people and
              technology. I like to be reliable, solving problems and enjoy
              working with new and unfamiliar technologies.
            </div>
            <div className="descrip">
              I have experience in fullstack development. I gained experience
              working as a software developer intern at Clik, a
              community-focused start-up in Enschede, The Netherlands, where I
              held responsibilites in developing full-stack and delivering
              production level components. I developed solutions, acted as a
              leader in team through the Agile workflow, conducted unit testing,
              and presented new feature suggestions to Company Leadership.
            </div>
            <div className="descrip">
              Outside of software developing, I love Music, film scoring,
              digital photography, and cinematography.
            </div>
          </div>
        </div>
        <div
          className="sectionCv"
          ref={function (el) {
            scrollRef.current[1] = el;
          }}
        >
          <h2>Resume</h2>
          <div className="pdf-wrapper">
            <iframe className="cresume" title="Resume"src={resume} type="application/pdf" />
          </div>
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
                href="mailto:anthony.irokosu@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
