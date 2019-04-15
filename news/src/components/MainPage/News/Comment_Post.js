import React, { Component } from 'react';

class Comment_Post extends Component {
    render() {
        return (
            <div id="respond">
            <form action="#" method="post">
                <p>
                <input type="text" name="name" id="name" defaultValue size={22} />
                <label htmlFor="name"><small>Name (required)</small></label>
                </p>
                <p>
                <input type="text" name="email" id="email" defaultValue size={22} />
                <label htmlFor="email"><small>Mail (required)</small></label>
                </p>
                <p>
                <textarea name="comment" id="comment" cols="100%" rows={10} defaultValue={""} />
                <label htmlFor="comment" style={{display: 'none'}}><small>Comment (required)</small></label>
                </p>
                <p>
                <input name="submit" type="submit" id="submit" defaultValue="Submit Form" />
                &nbsp;
                <input name="reset" type="reset" id="reset" tabIndex={5} defaultValue="Reset Form" />
                </p>
            </form>
            </div>

        );
    }
}

export default Comment_Post;