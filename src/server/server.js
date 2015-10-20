import express from 'express'
import React from 'react'
import createLocation from 'history/lib/createLocation'
import { RoutingContext, match } from 'react-router'
import routes from '../shared/routes.js'
import HTMLComponent from '../shared/components/HTML.js'
import path from 'path'
const app = express()

// set up jade templating engine
app.set('views', '../../views');
app.set('view engine', 'jade');

app.use('/assets', express.static(path.join(__dirname, '../shared/stylesheets')));

app.get('/*', function (req, res) {

  let location = createLocation(req.url) // sets location as url requested

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (redirectLocation)
      res.redirect(301, redirectLocation.pathname + redirectLocation.search)
    else if (error)
      res.status(500).send(error.message)
    else if (renderProps == null)
      res.status(404).send('Not found')
    else
      res.status(200).send(React.renderToStaticMarkup(
        <HTMLComponent markup={React.renderToString(<RoutingContext {...renderProps}/>)} />
      ))
  })
});

  var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Server listening at ', host, port);
});


