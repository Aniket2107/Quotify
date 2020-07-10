import React, { Component } from 'react'
import Typed from 'react-typed';

export default class MoodyHero extends Component {
    render() {
        return (
            <section className="moody" id="moody">
                <Typed
                strings={[
                    'Happy',
                    'Joyous',
                    'Relief',
                    'Pride',
                    'Compassion',
                    'Peace',
                    'Anxious',
                    'Stressed',
                    'Aversion',
                ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                     >
                </Typed>
                <h1> Get a quote for every emotion</h1>
                <p></p>
            </section>
        )
    }
}
