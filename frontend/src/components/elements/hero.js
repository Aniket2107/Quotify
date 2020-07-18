import React, { Component } from 'react'

export default class Hero extends Component {
    render() {
        return (
            <section className="hero">
                <h1 className="hero-heading">Your own personal Happy space</h1>
                <div className="hero-tagline">
                    <a className="btn btn-cta" href="#moody">Know more</a>
                </div>
            </section>
        )
    }
}
