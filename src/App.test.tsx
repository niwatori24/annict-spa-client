import React from 'react';
import App from './App';
import { shallow, mount, render } from 'enzyme';
import { About } from './About'
import { MainContent } from './MainContent'

test('render', () => {
  const wrapper = shallow(<App/>);
  expect(wrapper.find(About).length).toBe(1);
  expect(wrapper.find(MainContent).length).toBe(1);
});
