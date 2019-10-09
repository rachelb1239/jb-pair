import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import Button from './Button.jsx';

class LoadingContainer extends Component {
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
      <>
        <Button toggleLoading={this.toggleLoading} />
        <div>
          {this.state.buttonToggled && <FontAwesomeIcon icon={faCircleNotch} size="6x" spin />}
        </div>
      </>
    );
  }
}

export default LoadingContainer;