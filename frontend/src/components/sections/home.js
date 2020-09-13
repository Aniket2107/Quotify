import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Hero from '../elements/hero';
import Services from '../elements/services';
import MoodyHero from '../elements/moody_hero';

export default class Home extends Component {
    render() {
      return (
        <React.Fragment>
          <Hero />
          <MoodyHero />
        </React.Fragment>
      );
    }
  }
