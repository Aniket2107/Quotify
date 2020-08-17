import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../components/sections/home";
import Explore from "../../components/sections/explore";
import Navbar from "../../components/elements/navbar";
import Signin from "../Auth/Signin";
import Signup from "../Auth/Signup";
import AdminRoute from "../PrivateRoutes/AdminRoute";
import UserRoute from "../PrivateRoutes/UserRoute";
import adminDashboard from "../Admin/adminDashboard";
import userDashboard from "../User/userDashboard";
import AddQuote from "../User/AddQuote";
import CreateCategory from "../Admin/CreateCategory";
import ManageCategory from "../Admin/ManageCategory";
import UpdateCategory from "../Admin/UpdateCategory";

export default class LandingPage extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/explore" component={Explore} />
            <Route path="/signup" component={Signup} />
            <Route path="/signin" component={Signin} />
            <UserRoute path="/create/quote" component={AddQuote} />
            <UserRoute path="/user/profile" exact component={userDashboard} />
            <AdminRoute
              path="/admin/profile"
              exact
              component={adminDashboard}
            />
            <AdminRoute
              path="/admin/create/category"
              exact
              component={CreateCategory}
            />
            <AdminRoute
              path="/admin/manage/categories"
              exact
              component={ManageCategory}
            />
            <AdminRoute
              path="/admin/edit/category/:categoryId"
              exact
              component={UpdateCategory}
            />
            {/* <Route path="/team" component={Team}/> */}
          </Switch>
        </div>
      </Router>
    );
  }
  // import React, { Component } from 'react';
  // import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
  // import Home from '../../components/sections/home';
  // import Explore from '../../components/sections/explore';
  // import Navbar from '../../components/elements/navbar';
  // import Footer from '../elements/Footer';
  // import '../../assets/styles/landing_page.css';

  // export default class LandingPage extends Component {
  //     render() {
  //         return (
  //             <Router>
  //                 <div className="App">
  //                     <Navbar />
  //                     <Switch>
  //                     <Route exact path="/" component={Home}/>
  //                     <Route path="/explore" component={Explore}/>
  //                     {/* <Route path="/team" component={Team}/> */}
  //                     </Switch>
  //                     <Footer />
  //                 </div>
  //             </Router>
  //         )
  //     }
}
