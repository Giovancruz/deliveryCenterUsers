import React from 'react'
import { render } from 'react-dom'
import Home from './pages/Home';
import './index.css';


const App = () => (
  <Home />
)

render(
  <App/>,
  document.getElementById('app')
)
