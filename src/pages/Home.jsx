/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import Header from '../components/Header'
import UsersList from '../components/UsersList'
import { Container } from '@material-ui/core';

export default class Home extends Component {  
  render() {    
    return (
      <React.Fragment>
      <Header />
      <Container fixed>
        <UsersList />
      </Container>
      </React.Fragment>
      )
    }
  }