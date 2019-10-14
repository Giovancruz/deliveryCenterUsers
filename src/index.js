import React from 'react'
import { render } from 'react-dom'
import Home from './pages/Home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => (
  <MuiThemeProvider>
    <Home />
  </MuiThemeProvider>
)

render(
  <App/>,
  document.getElementById('app')
)
