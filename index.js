import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
import Main from './lib/Main'
import Nav from './lib/Nav'
import Album from './lib/Album'

render((
  <Router history={ hashHistory }>
    <Route path="/"
           component={ Main } />
    <Route path="/nav"
           component={ Nav }>
      <Route path="/album"
             compnent={ Album } />
    </Route>
  </Router>
), document.getElementById('app'))
