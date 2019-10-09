import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import { hotApp, App } from './components/app.jsx';

const hotSwap = false;

if (hotSwap) { // if hotSwap is enabled
  // Wrap component within App Container from react-hot-loader
  const render = Component => {
    ReactDOM.render(
      <AppContainer>
        <Component />
      </AppContainer>,
      document.getElementById('app')
    );
  }
  render(hotApp) // render app
  if (module.hot) { // if module is hot
    module.hot.accept('./components/app.jsx', () => { render(hotApp) }) // re-render app
  }
} else {
  ReactDOM.render(<App />, document.getElementById('app'));   // Render App without hot-loading
}