import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";

export default class Footer extends Component {
    render() {
      return (
          <section className="footer">
              <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center">Footer Part 1</div>
                    <div className="col-md-6 col-sm-12 d-flex justify-content-center">Footer Part 2</div>
                </div>
              </div>
          </section>
      );
    }
  }
