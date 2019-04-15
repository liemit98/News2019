import React, { Component } from 'react';

class Links extends Component {
    render() {
        return (
            <div className="wrapper">
                <div id="breadcrumb">
                    <ul>
                    <li className="first">You Are Here</li>
                    <li>»</li>
                    <li><a href="#">Home</a></li>
                    <li>»</li>
                    <li className="current"><a href="#">Phap luat</a></li>
                    </ul>
                </div>
            </div>

        );
    }
}

export default Links;