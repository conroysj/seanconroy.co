import { Route, IndexRoute } from 'react-router'
import React from 'react'
import App from './components/App.js'
import Projects from './components/Projects.js'
import Blog from './components/Blog.js'
import ContactMe from './components/ContactMe.js'
import Dashboard from './components/Dashboard.js'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={Dashboard}/>
    <Route path='projects' component={Projects} />
    <Route path='blog' component={Blog} />
    <Route path='contactme' component={ContactMe} />
  </Route>
)
