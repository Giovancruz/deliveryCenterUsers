import React, {render} from 'react';
import Loading from '../Loading';
import { getUsers } from '../../services/getUsers';

class UsersList extends React.Component {
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
      }, 3000);
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
    
    const componentHtml = <ul> {usersData.map(user => <li key={user.id}> {user.name} </li>)} </ul>
    
    return componentHtml;
    
  }
}

export default UsersList;