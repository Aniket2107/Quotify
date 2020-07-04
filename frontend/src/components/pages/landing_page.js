import React, { Component } from 'react';
import { BrowserRouter as Router ,Switch, Route } from 'react-router-dom';
import Home from '../../components/sections/home';
import Explore from '../../components/sections/explore';
import Navbar from '../../components/elements/navbar';

export default class LandingPage extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Navbar />
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/explore" component={Explore}/>
                    {/* <Route path="/team" component={Team}/> */}
                    </Switch>
                </div>
            </Router>
        )
    }
}
