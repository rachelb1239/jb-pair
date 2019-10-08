import { hot } from 'react-hot-loader/root';
import React from 'react';
import '../../styles/custom.scss'

const App = () => (
  <div>
    <h1>Hello World!</h1>
    <button type="button" className={`btn btn-primary`}>Test button</button>
  </div>
)

export default hot(App);