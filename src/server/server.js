import express from "express";
import React from "react";
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import routes from "../shared/routes.js";
import path from "path";
const app = express();

// set up Jade
app.set('views', './views');
app.set('view engine', 'jade');


app.get('/*', function (req, res) {
  // Router.run(routes, req.path, function(Root, state) {
  //   let content = React.renderToString(<Handler />);
  //   res.render('index', { content: content });
  // });
  let location = createLocation(req.url)

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    else if (error)
      res.send(500, error.message)
    else if (renderProps == null)
      res.send(404, 'Not found')
    else
      res.send(React.renderToString(<RoutingContext {...renderProps}/>))
  })
  //   routes, req.path, function(Root, state) {
  //   let bodyElement = React.createFactory(Root)({
  //     params: state.params
  //   });

  //   // Renders the wrapped component into an HTML string.
  //   let html = React.renderToStaticMarkup(
  //     <HtmlComponent markup={React.renderToString(bodyElement)} />
  //   );

  //   response.send(html);
  // });
});

  var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at http://%s:%s', host, port);
});
