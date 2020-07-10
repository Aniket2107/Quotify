import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/nav.css";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="">
        <div className="navbar navbar-expand navbar-dark nav-bg-dark fixed-top">
          <div className="nav navbar-nav container">
            <div className="d-flex justify-content-center">
              <Link to="/">
                <h1 className="nav-item nav-brand nav-link active">Quotify</h1>
              </Link>
            </div>
            <div className="d-flex justify-content-center">
              <Link to="/">
                <li className="nav-item nav-link active">Home</li>
              </Link>
              <Link to="/explore">
                <li className="nav-item nav-link">Explore</li>
              </Link>
              <Link to="/team">
                <li className="nav-item nav-link">Team</li>
              </Link>
              <Link to="/signin">
                <li className="nav-item nav-link">Sign In</li>
              </Link>
              <Link to="/signout">
                <li className="nav-item nav-link">Signout</li>
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
