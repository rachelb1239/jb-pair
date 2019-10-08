import React from 'react';
import { shallow, configure, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../src/components/App';
import Button from '../src/components/App';

configure({ adapter: new Adapter() });

const testFunction = () => true;

describe('App component', () => {
  // Shallow Render
  test('should render and sets initial state for button toggle to true', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.state().buttonToggled).toEqual(true);
   });

   // Mount
   test('should contain single button element', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('button').length).toBe(1);
   });

});

describe('Button component', () => {
  const wrapper = mount(<Button toggleLoading={testFunction} />);
  test('should have a prop toggleLoading', () => {
    expect(wrapper.props().toggleLoading).toEqual(testFunction);
   });
});