import React from "react";
import "./Style.css";
import pdf from "../../assets/Resume.pdf";
import NavBar from "../../Components/NavBar";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    // Refs for different elements]
    this.bioRef = React.createRef();
    this.resumeRef = React.createRef();
    this.portfolioRef = React.createRef();
    this.contactRef = React.createRef();
  }

  goToBio() {
    this.bioRef.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "center",
    });
  }
  goToResume() {
    if (this.resumeRef && this.resumeRef.current) {
      this.resumeRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }
  goToPortfolio() {
    if (this.portfolioRef && this.portfolioRef.current) {
      this.portfolioRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "center",
      });
    }
  }
  goToContact() {
    console.log("here");
    if (this.contactRef && this.contactRef.current) {
      this.contactRef.current.scrollIntoView({
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
          {/* create a list item */}
          <NavBar
            goToBio={this.goToBio}
            goToResume={this.goToResume}
            goToPortfolio={this.goToPortfolio}
            goToContact={this.goToContact}
          />
        </div>
        <div className="body">
          <div ref={this.bioRef} className="bio">
            <p className="aboutInfo">
              Hi My name is Anthony and i'm a Computer science student at
              University of Twente, I like to write programs and in my spare
              time do a bit of Photography and Writing
            </p>
          </div>
          <div ref={this.resumeRef} className="resume">
            <embed
              className="pdf"
              src={pdf}
              type="application/pdf"
              width="80%"
              height="550px"
            />
          </div>
        </div>
        <div ref={this.portfolioRef} className="gitRepo"></div>
        <div ref={this.contactRef} className="contact">
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
