/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import GetUsers from '../services/getUsers';

class Home extends React.Component {
  constructor() {
    super();
    
    this.users = new GetUsers();
  } 

  render() {
    return (
    <Header />
    )
  }
}

export default Home;