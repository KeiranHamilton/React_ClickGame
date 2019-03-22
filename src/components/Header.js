import React from "react";
import "../styles/Header.css";

// create a header with a Bootstrap navbar and jumbotron

const Header = props => (
  <div className="jumbotron">
    <h1>Click Em </h1>
    <p className="lead">
      Click on a picture, but dont click on the same picture twice!
    </p>
    <nav className="navbar sticky-top navbar-light bg-light justify-content-end">
      <h5 className="text-muted">
        Current Score: {props.currentScore} <br /> <br />
        Top Score: {props.topScore}
      </h5>
    </nav>
  </div>
);

export default Header;
