import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';

export default class Header extends Component {
  render() {
    return <Box marginBottom="2rem">
    <AppBar title="MenuSuperior" color="primary" className="App-header" position="sticky" >
      <Toolbar>
        <Typography variant="h6">
          Usuários
        </Typography>
      </Toolbar>
    </AppBar>
    </Box>
  }
}