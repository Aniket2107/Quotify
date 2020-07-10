import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../components/sections/home";
import Explore from "../../components/sections/explore";
import Navbar from "../../components/elements/navbar";
import SignIn from "../Auth/Signin";
import SignUp from "../Auth/Signup";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import UserRoute from "../PrivateRoutes/UserRoute";
import adminDashboard from "../Admin/adminDashboard";
import userDashboard from "../User/userDashboard";

export default class LandingPage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/signup" component={SignUp} />
            <Route path="/signin" component={SignIn} />
            <UserRoute path="/user/profile" component={userDashboard} />
            <AdminRoute path="/admin/profile" component={adminDashboard} />
            {/* <Route path="/team" component={Team}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
}
