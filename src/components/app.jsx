import { hot } from 'react-hot-loader/root';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import '../../styles/custom.scss'

const App = () => (
  <div>
    <h1>Hello World!</h1>
    <FontAwesomeIcon icon={faCircleNotch} size="6x"/>
  </div>
)

export default hot(App);