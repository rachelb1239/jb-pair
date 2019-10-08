import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/app';
import Button from '../src/components/app';

configure({ adapter: new Adapter() });

describe('App component', () => {
  it('renders without crashing', () => {
     shallow(<App />);
   });
});

describe('Button component', () => {
  it('renders without crashing', () => {
     shallow(<Button />);
   });
});