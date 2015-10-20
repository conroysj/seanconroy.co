'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _historyLibCreateLocation = require('history/lib/createLocation');

var _historyLibCreateLocation2 = _interopRequireDefault(_historyLibCreateLocation);

var _reactRouter = require('react-router');

var _sharedRoutesJs = require('../shared/routes.js');

var _sharedRoutesJs2 = _interopRequireDefault(_sharedRoutesJs);

var _sharedComponentsHTMLJs = require('../shared/components/HTML.js');

var _sharedComponentsHTMLJs2 = _interopRequireDefault(_sharedComponentsHTMLJs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var app = (0, _express2['default'])();

// set up jade templating engine
app.set('views', '../../views');
app.set('view engine', 'jade');

app.use('/assets', _express2['default']['static'](_path2['default'].join(__dirname, '../shared/stylesheets')));

app.get('/*', function (req, res) {

  var location = (0, _historyLibCreateLocation2['default'])(req.url); // sets location as url requested

  (0, _reactRouter.match)({ routes: _sharedRoutesJs2['default'], location: location }, function (error, redirectLocation, renderProps) {
    if (redirectLocation) res.redirect(301, redirectLocation.pathname + redirectLocation.search);else if (error) res.status(500).send(error.message);else if (renderProps == null) res.status(404).send('Not found');else res.status(200).send(_react2['default'].renderToStaticMarkup(_react2['default'].createElement(_sharedComponentsHTMLJs2['default'], { markup: _react2['default'].renderToString(_react2['default'].createElement(_reactRouter.RoutingContext, renderProps)) })));
  });
});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at ', host, port);
});