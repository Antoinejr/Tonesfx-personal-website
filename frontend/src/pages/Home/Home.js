import React from "react";
import "./Style.css";
import pdf from "../../assets/Resume.pdf";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.resumeRef = React.createRef();
  }

  scrollToResume() {
    if (this.resumeRef && this.resumeRef.current) {
      this.resumeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }

  render() {
    return (
      <div className="container">
        <div className="header">
          {/* anchors to different section in page */}
          <h4 onClick={() => this.scrollToResume()}>Resume</h4>
        </div>
        <div className="body">
          <div className="bio">
            <p className="aboutInfo">
              Hi My name is Anthony and i'm a Computer science student at
              University of Twente, I like to write programs and in my spare
              time do a bit of Photography and Writing
            </p>
          </div>
          <div ref={(target) => (this.resumeRef = target)} className="resume">
            <embed
              className="pdf"
              src={pdf}
              type="application/pdf"
              width="80%"
              height="550px"
            />
          </div>
        </div>
        <div className="gitRepo"></div>
        <div className="imageCarousel"></div>
        <div className="contact">
          <p>
            <a href="https://instagram.com/tones.fx">Instagram</a>
            <a href="https://github.com/Antoinejr">Github</a>
            <a href="https://youtube.com/channel/UCQlmTQRIDEep3n3lfa6KCCA">
              Youtube
            </a>
          </p>
        </div>

        <div className="footer">
          <p> © 2022 Anthony M. Irokosu</p>
        </div>
      </div>
    );
  }
}
