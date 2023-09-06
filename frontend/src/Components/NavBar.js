import React from "react";
import "./NavBar.css"

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      active: "",
    };
  }

  setActiveTab(selectedTab) {
    this.setState({ active: selectedTab });
  }

  render() {
    return (
      <nav>
        <ul>
          <li onClick={() => this.props.goToBio()}>Bio</li>
          <li onClick={() => this.props.goToResume}>Resume</li>
          <li onClick={() => this.props.goToPortfolio}>Portfolio</li>
          <li onClick={() => this.props.goToContact}>Contact</li>
        </ul>
      </nav>
    );
  }
}
