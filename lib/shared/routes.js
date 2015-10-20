'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _reactRouter = require('react-router');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _componentsAppJs = require('./components/App.js');

var _componentsAppJs2 = _interopRequireDefault(_componentsAppJs);

var _componentsProjectsJs = require('./components/Projects.js');

var _componentsProjectsJs2 = _interopRequireDefault(_componentsProjectsJs);

var _componentsBlogJs = require('./components/Blog.js');

var _componentsBlogJs2 = _interopRequireDefault(_componentsBlogJs);

var _componentsContactMeJs = require('./components/ContactMe.js');

var _componentsContactMeJs2 = _interopRequireDefault(_componentsContactMeJs);

var _componentsDashboardJs = require('./components/Dashboard.js');

var _componentsDashboardJs2 = _interopRequireDefault(_componentsDashboardJs);

exports['default'] = _react2['default'].createElement(
  _reactRouter.Route,
  { path: '/', component: _componentsAppJs2['default'] },
  _react2['default'].createElement(_reactRouter.IndexRoute, { component: _componentsDashboardJs2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: 'projects', component: _componentsProjectsJs2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: 'blog', component: _componentsBlogJs2['default'] }),
  _react2['default'].createElement(_reactRouter.Route, { path: 'contactme', component: _componentsContactMeJs2['default'] })
);
module.exports = exports['default'];