'use strict';

import React from "react";
import Router from "react-router";

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

const routes = (
  <Route handler={template}>
    <Route name="home" path="/" handler={Home} />
    <Route name="projects" path="/projects" handler={Projects} />
    <Route name="about" path="/about" handler={About} />

    <DefaultRoute handler={Home} />

    <NotFoundRoute name="not-found" path="/404" handler={NotFound} />
  </Route>
  );

export default routes;
