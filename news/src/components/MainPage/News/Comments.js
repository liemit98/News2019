import React, { Component } from 'react';

class Comments extends Component {
    render() {
        return (
            <div id="comments">
            <h2>Comments</h2>
            <ul className="commentlist">
                <li className="comment_odd">
                <div className="author"><img className="avatar" src="../images/demo/avatar.gif" width={32} height={32} alt /><span className="name"><a href="#">A Name</a></span> <span className="wrote">wrote:</span></div>
                <div className="submitdate"><a href="#">August 4, 2009 at 8:35 am</a></div>
                <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                </li>
                <li className="comment_even">
                <div className="author"><img className="avatar" src="../images/demo/avatar.gif" width={32} height={32} alt /><span className="name"><a href="#">A Name</a></span> <span className="wrote">wrote:</span></div>
                <div className="submitdate"><a href="#">August 4, 2009 at 8:35 am</a></div>
                <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                </li>
                <li className="comment_odd">
                <div className="author"><img className="avatar" src="../images/demo/avatar.gif" width={32} height={32} alt /><span className="name"><a href="#">A Name</a></span> <span className="wrote">wrote:</span></div>
                <div className="submitdate"><a href="#">August 4, 2009 at 8:35 am</a></div>
                <p>This is an example of a comment made on a post. You can either edit the comment, delete the comment or reply to the comment. Use this as a place to respond to the post or to share what you are thinking.</p>
                </li>
            </ul>
            </div>

        );
    }
}

export default Comments;