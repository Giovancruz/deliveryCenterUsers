import  React from "react";

const GET_USERS_URL = "https://jsonplaceholder.typicode.com/users";

class GetUsers extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      isFetching: false,
      usersData: []
    }
  }

  isFetching() {
    return this.state.isFetching
  }
  
  async componentDidMount() {
    
    this.setState({ isFetching: true })
    
    const results = await fetch(GET_USERS_URL);
    const data = await results.json();

    this.setState({ 
      isFetching: false, 
      usersData: data 
    });

    console.log(this.state);
  }
  
}

export default GetUsers;
