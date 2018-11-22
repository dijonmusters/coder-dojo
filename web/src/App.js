import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

class App extends Component {
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
  render() {
    const { message } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <p>{message}</p>
        </header>
      </div>
    );
  }
}

export default App;
