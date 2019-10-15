/* eslint-disable no-unused-expressions */
import React from 'react'
import Header from '../components/Header'
import UsersList from '../components/UsersList'
import Container from '@material-ui/core/Container';

class Home extends React.Component {  
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
  
  export default Home;