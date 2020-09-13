import React, { Component } from "react";
import Typed from "react-typed";
import { Link } from "react-router-dom";

export default class MoodyHero extends Component {
  render() {
    return (
      <section className="moody" id="moody">
        <Typed
          strings={[
            "Happy",
            "Joyous",
            "Relief",
            "Pride",
            "Compassion",
            "Peace",
            "Anxious",
            "Stressed",
            "Aversion",
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        ></Typed>
        <h1> Get a quote for every emotion</h1>
        <Link to="/explore">
          <button type="button" class="btn btn-dark">
            GET STARTED
          </button>
        </Link>
      </section>
    );
  }
}
