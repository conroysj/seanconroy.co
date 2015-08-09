'use strict';
import component from "./components/navbar.js";
import React from "react";
import Router from "react-router";

window.React = React;
// var headParams = new HeadParams();

//Router.run(routes, Router.HistoryLocation);

document.body.appendChild(component());
