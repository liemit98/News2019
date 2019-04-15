import React, { Component } from 'react';
import Header from './General/Header'
import Container from './Home/Container';
import Adblock from './Home/Adblock';
import Page_last from './Home/Page_last';
import Footer from './General/Footer';

class Home extends Component {
    render() {
        return (
            <div>
                <Container/>
                <Adblock/>
                <Page_last/>
            </div>
        );
    }
}

export default Home;