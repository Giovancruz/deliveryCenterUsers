import React, { Component } from 'react';
import Loading from '../Loading';
import { getUsers } from '../../services/getUsers';
import { Grid } from '@material-ui/core';
import UsersListItem from './userListItem';

export default class UsersList extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isFetching: false,
      usersData: [],
      error: null,
    }
  }
  
  componentDidMount() {
    this.setState({ isFetching: true });
    
    getUsers().then(response => {
      setTimeout(() => {
        /* Simulating slow connection */
        this.setState({
          isFetching: false,
          usersData: response
        });
      }, 2000);
    })
  }
  
  
  render() {
    const { usersData, isFetching, error } = this.state;
    
    if (isFetching) {
      return <Loading loading={isFetching} message='Carregando usuários...' />;
    }
    if (!usersData.length) {
      return <p>Não existem usuários ...</p>;
    }
    if (error) {
      return <p>{error.message}</p>;
    }
    
    return(
      <Grid container spacing={5}>
        {usersData.map(user =>
          <Grid item xs={12} sm={6} md={3} key={user.id}>
            <UsersListItem user={user} />
          </Grid>
        )}
      </Grid>
    );
    
  }
}