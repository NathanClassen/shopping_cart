import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Shop from '../components/Shop';

it('has an h1 element', () => {
  const wrapper = shallow(<Shop />);
  expect(wrapper.find('h1').text()).toEqual('Welcome!');
});
