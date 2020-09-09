import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "../../assets/styles/nav.css";
import { isAuthenticated, signout } from "../Auth/helper";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
    console.log(this.state);
  }
  render() {
    const buttonClasses = this.state.collapsed ? "cross" : "menu";
    return (
      <nav className="">
        <div
          className={`navbar navbar-expand navbar-dark nav-bg-dark fixed-top`}
        >
          <div className="nav navbar-nav container">
            <div className="d-flex justify-content-center">
              <Link to="/">
                <h1 className="nav-item nav-brand nav-link active">Quotify</h1>
              </Link>
            </div>
            {/* Hamburger */}
            <button className={buttonClasses} onClick={this.toggleNavbar}>
              <span className="menubar"></span>
            </button>
            <div className="nav-link-container">
              <Link to="/">
                <li className="nav-item nav-link active">Home</li>
              </Link>
              <Link to="/explore">
                <li className="nav-item nav-link active">Explore</li>
              </Link>
              <Link to="/team">
                <li className="nav-item nav-link active">Team</li>
              </Link>
              {!isAuthenticated() && (
                <Link to="/signin">
                  <li className="nav-item nav-link active">Sign In</li>
                </Link>
              )}
              {isAuthenticated() && isAuthenticated().user.role === 0 && (
                <Link to="/user/profile">
                  <li className="nav-item nav-link active">Profile</li>
                </Link>
              )}
              {isAuthenticated() && isAuthenticated().user.role === 1 && (
                <Link to="/admin/profile">
                  <li className="nav-item nav-link active">Admin Dashboard</li>
                </Link>
              )}
              {isAuthenticated() && (
                <Link>
                  <li
                    style={{ cursor: "pointer" }}
                    className="text-warning nav-item nav-link active"
                    onClick={() => {
                      signout(() => {
                        this.props.history.push("/");
                      });
                    }}
                  >
                    SignOut
                  </li>
                </Link>
              )}
              {/* <Link to="/signup">
                <li className="nav-item nav-link active">Sign Up</li>
              </Link> */}
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
