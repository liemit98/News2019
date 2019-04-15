import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div>
                <div>
  <div className="wrapper">
    <div id="footer">
      <div className="footbox">
        <h2>Lacus interdum</h2>
        <ul>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li><a href="#">Praesent et eros</a></li>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li className="last"><a href="#">Praesent et eros</a></li>
        </ul>
      </div>
      <div className="footbox">
        <h2>Lacus interdum</h2>
        <ul>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li><a href="#">Praesent et eros</a></li>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li className="last"><a href="#">Praesent et eros</a></li>
        </ul>
      </div>
      <div className="footbox">
        <h2>Lacus interdum</h2>
        <ul>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li><a href="#">Praesent et eros</a></li>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li className="last"><a href="#">Praesent et eros</a></li>
        </ul>
      </div>
      <div className="footbox">
        <h2>Lacus interdum</h2>
        <ul>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li><a href="#">Praesent et eros</a></li>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li className="last"><a href="#">Praesent et eros</a></li>
        </ul>
      </div>
      <div className="footbox last">
        <h2>Lacus interdum</h2>
        <ul>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li><a href="#">Praesent et eros</a></li>
          <li><a href="#">Lorem ipsum dolor</a></li>
          <li><a href="#">Suspendisse in neque</a></li>
          <li className="last"><a href="#">Praesent et eros</a></li>
        </ul>
      </div>
      <br className="clear" />
    </div>
  </div>
  {/* ####################################################################################################### */}
  <div className="wrapper">
    <div id="socialise">
      <ul>
        <li><a href="#"><img src="layout/images/facebook.gif" alt /><span>Facebook</span></a></li>
        <li><a href="#"><img src="layout/images/rss.gif" alt /><span>FeedBurner</span></a></li>
        <li className="last"><a href="#"><img src="layout/images/twitter.gif" alt /><span>Twitter</span></a></li>
      </ul>
      <div id="newsletter">
        <h2>NewsLetter Sign Up !</h2>
        <p>Please enter your Email and Name to join.</p>
        <form action="#" method="post">
          <fieldset>
            <legend>Digital Newsletter</legend>
            <div className="fl_left">
              <input type="text" defaultValue="Enter name here…" onfocus="this.value=(this.value=='Enter name here…')? '' : this.value ;" />
              <input type="text" defaultValue="Enter email address…" onfocus="this.value=(this.value=='Enter email address…')? '' : this.value ;" />
            </div>
            <div className="fl_right">
              <input type="submit" name="newsletter_go" id="newsletter_go" defaultValue="»" />
            </div>
          </fieldset>
        </form>
        <p>To unsubsribe please <a href="#">click here »</a>.</p>
      </div>
      <br className="clear" />
    </div>
  </div>
  {/* ####################################################################################################### */}
  <div className="wrapper col8">
    <div id="copyright">
      <p className="fl_left">Copyright © 2018 - All Rights Reserved - <a href="#">Domain Name</a></p>
      <p className="fl_right">Template by <a target="_blank" href="https://www.os-templates.com/" title="Free Website Templates">OS Templates</a></p>
      <br className="clear" />
    </div>
  </div>
</div>

            </div>
        );
    }
}

export default Footer;