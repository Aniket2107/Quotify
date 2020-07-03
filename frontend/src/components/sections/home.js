import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import '../assets/styles/hero.css';
import "bootstrap/dist/css/bootstrap.css";
import Hero from '../elements/hero';
import Services from '../elements/services';

export default class Home extends Component {
    render() {
      return (
        <React.Fragment>
          <Hero />
          <Services />
        </React.Fragment>
      );
    }
  }
