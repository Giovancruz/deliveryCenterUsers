import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import './header.css';

class Header extends React.Component {
  render() {
    return <AppBar title="MenuSuperior" color="default" className="App-header" position="static">
      <Toolbar>
        <Typography variant="h6">
          Usuários
        </Typography>
      </Toolbar>
    </AppBar>
  }
}

export default Header;