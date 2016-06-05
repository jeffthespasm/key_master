import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router'

import App from './components/app'
import Start from './components/start'
import ScaleNamesToKeySignatures from './components/scale_names_to_key_signatures'

import './stylesheets/main'

document.addEventListener('DOMContentLoaded', () => {
  render((
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Start} />
        <Route
          path="/scale-names-to-key-signatures"
          component={ScaleNamesToKeySignatures}
        />
      </Route>
    </Router>
  ), document.getElementById('app'))
})
