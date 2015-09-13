'use strict';

import React from 'react';
import Router from 'react-router';
import Layout from './Layout';
import Home from './Home';
import Projects from './Projects';
import About from './About';
import NotFound from './NotFound';


const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;
const NotFoundRoute = Router.NotFoundRoute;

const routes = (

  <Route handler={Layout}>
    <DefaultRoute name="home" handler={Home} />

    <Route name="projects" path="/projects" handler={Projects} />
    <Route name="about" path="/about" handler={About} />

    <NotFoundRoute name="/not-found" handler={NotFound} />
  </Route>
  );

export default routes;
