'use strict';

import React from "react";
import Router from "react-router";
import Routes from "./components/Routes";

window.React = React;

Router.run(Routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler />, document.body);
});

