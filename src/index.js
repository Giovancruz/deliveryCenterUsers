import React from 'react'
import { render } from 'react-dom'
import Home from './pages/Home';
import { ThemeProvider } from '@material-ui/core/styles';
import './index.css';

const App = () => (
  <ThemeProvider>
    <Home />
  </ThemeProvider>
)

render(
  <App/>,
  document.getElementById('app')
)
