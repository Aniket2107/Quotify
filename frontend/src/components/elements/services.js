import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.css";
import {ServiceCard} from './service_card';

export default class Services extends Component {
    render() {
        return (
            <section className="services" id="services">
                <h1 className="services_heading">Services</h1>
                <div className="container row">
                    <ServiceCard title="Service 1" body="Bla bla bla" src={require('../../assets/images/home_background.jpg')} />
                    <ServiceCard title="Service 2" body="Bla bla bla" src={require('../../assets/images/home_background.jpg')} />
                    <ServiceCard title="Service 3" body="Bla bla bla" src={require('../../assets/images/home_background.jpg')} />
                </div>
            </section>
        )
    }
}
