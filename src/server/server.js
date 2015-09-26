import express from "express";
import React from "react";
import { Router, Route, Link } from 'react-router'
import routes from "../shared/routes.js";
const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');


app.get('/*', function (req, res) {
  Router.run(routes, req.path, Handler => {
    let content = React.renderToString(<Handler />);
    res.render('index', { content: content });
  });
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
