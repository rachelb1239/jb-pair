import { hot } from 'react-hot-loader/root'; // Hot loader for development w/o page refresh
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Button from './Button.jsx';
import '../../styles/custom.scss'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonToggled: true
    }

    this.toggleLoading = this.toggleLoading.bind(this);
  }

  toggleLoading () {
    this.setState((prevState) => {
      return { buttonToggled: !prevState.buttonToggled }
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Button toggleLoading={this.toggleLoading} />
        <div>
          {this.state.buttonToggled && <FontAwesomeIcon icon={faCircleNotch} size="6x"/>}
        </div>
      </div>
    );
  }
}

export default hot(App);