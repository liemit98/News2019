import React, { Component } from 'react';
import Comment_Post from './Comment_Post';
import Comments from './Comments'
class Content_News extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div class="content">
            <h1><strong>{this.props.tua}</strong></h1>
            <img class="imgr" src={this.props.hinhanh} alt="" width="125" height="125" />
            <h4>{this.props.noidung}</h4>

          


            <Comments/>
            <h2>Write A Comment</h2>
            <Comment_Post/>
            </div>
        );
    }
}

export default Content_News;