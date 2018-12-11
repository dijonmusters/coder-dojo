import React, { Component } from 'react';
import axios from 'axios';

class Home extends Component {
  state = {
    message: 'Loading API',
  }
  componentDidMount() {
    axios.get('/api')
      .then(resp => resp.data)
      .then(resp => {
        this.setState({ message: resp.data });
      })
      .catch(error => {
        this.setState({ message: 'There was an issue connecting to the API'});
      });
  }
  handleAuthCheck = () => {
    axios.get('/api/auth')
      .then(resp => resp.data)
      .then(resp => {
        console.log(resp)
      })
      .catch(error => {
        console.log(error)
        this.setState({ message: 'Not authorized' });
      });
  }
  render() {
    const { message } = this.state;
    return (
      <div>
        <button onClick={this.handleAuthCheck}>check</button>
        <header>
          <p>{message}</p>
        </header>
      </div>
    );
  }
}

export default Home;