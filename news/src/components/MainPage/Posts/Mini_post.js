import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class Mini_post extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (      
                <div className={this.props.id%2==0?("fl_left"):("fl_right")}>
                    <Link to={"/tin/"+this.props.theloai+"/"+this.props.ma}><img src={this.props.hinhanh} style={{height: '100px', width: '100px'}} alt /></Link>
                    <p><strong><Link to={"/tin/"+this.props.theloai+"/"+this.props.ma}>{this.props.tua}</Link></strong></p>
                    <p>{this.props.mota}</p>
                    </div>
                    
            
        );
    }
}

export default Mini_post;