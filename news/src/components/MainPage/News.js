import React, { Component } from 'react';
import Header from './General/Header';
import Container from './Home/Container';
import Footer from './General/Footer';
import Content_Post from './Posts/Content_Post';

class News extends Component {
   
    render() {
        console.log(this.props.match.params.id);
        return (
            <div>
                <Container ten={this.props.match.params.id}/>
                <Content_Post loai={this.props.match.params.id} />
            </div>
        );
    }
}

export default News;