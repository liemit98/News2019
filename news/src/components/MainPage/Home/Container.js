import React, { Component } from 'react';
import Content from './Content';
import Column_Content from './Column_Content';

class Container extends Component {
    render() {
        return (
            <div className="wrapper">
                <div className="container">
                    <Content loai={this.props.ten}/>
                    <Column_Content loai={this.props.ten}/>
                    <br className="clear" />
                </div>
            </div>

        );
    }
}

export default Container;