import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className="wrapper">
                        <div id="header">
                        <div className="fl_left">
                            <h1><a href="index.html"><strong>B</strong>ao <strong>M</strong>ang</a></h1>
                            <p>Ban cua moi nha</p>
                        </div>
                        <div className="fl_right"><a href="#"><img src="images/demo/468x60.gif" alt /></a></div>
                        <br className="clear" />
                        </div>
                    </div>
  {/* ####################################################################################################### */}
  <div className="wrapper col2">
    <div id="topbar">
      <div id="topnav">
        <ul>
          <li><Link to="/">Trang Chu</Link></li>
          <li><Link to="/ThoiSu">Thoi Su</Link></li>
          <li><Link to="/PhapLuat">Phap Luat</Link></li>
          <li><Link to="/DuLich">Du Lich</Link></li>
          <li><Link to="/TheThao">The Thao</Link></li>
          
          <li><a href="#">Them</a>
            <ul>
              <li><a href="#">Gia dinh</a></li>
              <li><a href="#">Am thuc</a></li>
              <li><a href="#">Am nhac</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <div id="search">
        <form action="#" method="post">
          <fieldset>
            <legend>Site Search</legend>
            <input type="text" defaultValue="Search Our Website…" onfocus="this.value=(this.value=='Search Our Website…')? '' : this.value ;" />
            <input type="submit" name="go" id="go" defaultValue="Search" />
          </fieldset>
        </form>
      </div>
      <br className="clear" />
    </div>
  </div>
</div>
            </div>
        );
    }
}

export default Header;