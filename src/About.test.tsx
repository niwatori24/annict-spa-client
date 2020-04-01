import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai' 
import { About } from './About'

test('render', () => {
  const wrapper = shallow(<About/>);
  expect(wrapper.find('p')).to.have.lengthOf(1);
})
