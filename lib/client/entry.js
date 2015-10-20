'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _historyLibCreateBrowserHistory = require('history/lib/createBrowserHistory');

var _historyLibCreateBrowserHistory2 = _interopRequireDefault(_historyLibCreateBrowserHistory);

var _sharedRoutes = require('../shared/routes');

var _sharedRoutes2 = _interopRequireDefault(_sharedRoutes);

_react2['default'].render(_react2['default'].createElement(
  _reactRouter.Router,
  { history: (0, _historyLibCreateBrowserHistory2['default'])() },
  _sharedRoutes2['default']
), document.getElementById('app'));