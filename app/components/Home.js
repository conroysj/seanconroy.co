'use strict';
import React from 'react';
import Router from 'react-router';
const Link = Router.Link;

class Home extends React.Component {
  render() {
    return (
      <div>
        <header />
        <ul>
          <li><Link to="/projects">Projects</Link></li>
          <li>Contact</li>
          <li></li>
        </ul>
      </div>
    );
  }
}

export default Home;
