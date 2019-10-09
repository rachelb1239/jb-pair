import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../src/components/Button';
import LoadingContainer from '../src/components/LoadingContainer';

configure({ adapter: new Adapter() });

const mockFunction = jest.fn(); // mock function for testing

// Loading Container Tests
describe('Loading Container', () => {
  // Shallow Render
  test('should render and sets initial state for button toggle to true', () => {
    const wrapper = shallow(<LoadingContainer />);
    expect(wrapper.state().buttonToggled).toEqual(true);
   });

   describe('mounted component', () => {
     
    test('should display svg element representing icon on initial render', () => {
      const wrapper = mount(<LoadingContainer />);
      expect(wrapper.find('svg').length).toEqual(1);
    });

    test('should update state of buttonToggled after button click', () => {
      const wrapper = mount(<LoadingContainer />);
      wrapper.find('button').simulate('click');
      expect(wrapper.state().buttonToggled).toEqual(false);
      wrapper.find('button').simulate('click');
      expect(wrapper.state().buttonToggled).toEqual(true);
    });

    test('should hide svg element after button click if buttonToggled is false', () => {
      const wrapper = mount(<LoadingContainer />);
      wrapper.find('button').simulate('click');
      expect(wrapper.state().buttonToggled).toEqual(false);
      expect(wrapper.find('svg').length).toEqual(0);
    });
   })
});

// Button Component Tests
describe('Button component', () => {
  const wrapper = mount(<Button toggleLoading={mockFunction} />);
  test('should have a prop toggleLoading that is a function', () => {
    expect(wrapper.props().toggleLoading).toEqual(mockFunction);
  });
});