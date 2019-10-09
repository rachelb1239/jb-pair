import { hot } from 'react-hot-loader/root'; // Hot loader for development w/o page refresh
import React, { Component } from 'react';
import LoadingContainer from './LoadingContainer.jsx';
import '../../styles/custom.scss'

class App extends Component {
  render() {
    return (
      <LoadingContainer />
    );
  }
}

export default hot(App);