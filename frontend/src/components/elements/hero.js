import React, { Component } from 'react';
import '../../assets/styles/home.css';

export default class Hero extends Component {
    render() {
        return (
            <div className="hero">
                <h1 className="hero-heading">Your own personal Happy space</h1>
                <div className="hero-tagline">
                    <a className="btn btn-cta" href="#services">Know more</a>
                </div>
            </div>
        )
    }
}
