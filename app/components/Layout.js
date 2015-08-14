'use strict';
import React from 'react';
import Router from 'react-router';

class Layout extends React.Component {
  render() {
    return (
      <div>
        On Layout Page!
        <Router.RouteHandler />
      </div>
    );
  }
}

export default Layout;
