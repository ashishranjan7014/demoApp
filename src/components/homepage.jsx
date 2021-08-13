import React, { Component } from 'react';
import "../css/homepage.css";
import LogIn from './login';

class Homepage extends Component {

  render() {
    return (
      <div className="bgimg">
        <div className="w3-display-topleft w3-padding-large w3-xlarge">
          <span style={{ float: "left" }}>
            <LogIn></LogIn>
          </span>
        </div>
        <span style={{ float: "right" }}>
          <button type="button" className="btn btn-info btn-lg" >
            <a href="https://ashishranjan7014.github.io/demoApp/signup">Signup</a>
          </button>
        </span>
        <div className="w3-display-middle">
          <h1 className="w3-jumbo w3-animate-top">COMING SOON</h1>
          <hr className="w3-border-grey" style={{ margin: "auto", width: "140px" }} />
          <p className="w3-large w3-center">35 days left</p>
        </div>
      </div>
    );
  }
}

export default Homepage;