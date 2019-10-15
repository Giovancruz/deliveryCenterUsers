/* eslint-disable no-unused-expressions */
import React from 'react'
import Header from '../components/Header'
import UsersList from '../components/UsersList'

class Home extends React.Component {
  constructor() {
    super();
    
    this.users = new GetUsers();
  } 

  render() {
    return (
      <React.Fragment>
    <Header />
        <UsersList />
      </React.Fragment>
    )
  }
}

export default Home;