import React, { Component } from 'react'
import '../../assets/styles/landing_page.css';
import 'bootstrap/dist/css/bootstrap.css'
import QuotesList from '../elements/QuotesList';

export default class Explore extends Component {
    render() {
        return (
            <div className="explore">
                <div className="container">
                    <QuotesList />
                </div>
            </div>
        )
    }
}
