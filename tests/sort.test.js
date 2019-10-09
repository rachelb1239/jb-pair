import React from 'react';
import { shallow, configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Table from '../src/components/Table';

configure({ adapter: new Adapter() });

const mockFunction = jest.fn(); // mock function for testing

// Loading Container Tests
// describe('Loading Container', () => {
//   // Shallow Render
//   test('should render and sets initial state for button toggle to true', () => {
//     const wrapper = shallow(<LoadingContainer />);
//     expect(wrapper.state().buttonToggled).toEqual(true);
//    });

//    describe('mounted component', () => {
     
//     test('should display svg element representing icon on initial render', () => {
//       const wrapper = mount(<LoadingContainer />);
//       expect(wrapper.find('svg').length).toEqual(1);
//     });

//     test('should update state of buttonToggled after button click', () => {
//       const wrapper = mount(<LoadingContainer />);
//       wrapper.find('button').simulate('click');
//       expect(wrapper.state().buttonToggled).toEqual(false);
//       wrapper.find('button').simulate('click');
//       expect(wrapper.state().buttonToggled).toEqual(true);
//     });

//     test('should hide svg element after button click if buttonToggled is false', () => {
//       const wrapper = mount(<LoadingContainer />);
//       wrapper.find('button').simulate('click');
//       expect(wrapper.state().buttonToggled).toEqual(false);
//       expect(wrapper.find('svg').length).toEqual(0);
//     });
//    })
// });

// Table Component Tests
describe('Table component', () => {
  const wrapper = mount(<Table />);
  test('should have an initial state', () => {
    expect(wrapper.state().rows).toEqual(
      [
      {"firstName": "Luke", "id": 1, "lastName": "Skywalker"},
      {"firstName": "Han", "id": 2, "lastName": "Solo"},
      {"firstName": "Leia", "id": 3, "lastName": "Organa"}, 
      {"firstName": "Lando", "id": 4, "lastName": "Calrissian"}
    ]);
  });

  test('should sort by firstName on click', () => {
    wrapper.find('[data-column="firstName"]').simulate('click');
    expect(wrapper.state().rows).toEqual([
      {"firstName": "Han", "id": 2, "lastName": "Solo"}, 
      {"firstName": "Lando", "id": 4, "lastName": "Calrissian"}, 
      {"firstName": "Leia", "id": 3, "lastName": "Organa"}, 
      {"firstName": "Luke", "id": 1, "lastName": "Skywalker"}]);
  });

  test('should sort by lastName on click', () => {
    wrapper.find('[data-column="lastName"]').simulate('click');
    expect(wrapper.state().rows).toEqual([
      {"firstName": "Lando", "id": 4, "lastName": "Calrissian"}, 
      {"firstName": "Leia", "id": 3, "lastName": "Organa"}, 
      {"firstName": "Luke", "id": 1, "lastName": "Skywalker"},
      {"firstName": "Han", "id": 2, "lastName": "Solo"}
    ]);
  });
});