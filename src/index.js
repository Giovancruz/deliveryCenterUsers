import React from 'react'
import { render } from 'react-dom'
import Home from './pages/Home';
import CssBaseline from '@material-ui/core/CssBaseline';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Home />
  </React.Fragment>
)

render(
  <App/>,
  document.getElementById('app')
)
