import React from 'react'
import { render } from 'react-dom'
import Header from '././components/Header';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = () => {
  <MuiThemeProvider>
    <Header></Header>
  </MuiThemeProvider>
}

const a = 'teste';

a = 'eaweaw';

render(
  <App/>,
  document.getElementById('app')
)
