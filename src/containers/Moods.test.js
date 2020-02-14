import React from 'react';
import { shallow } from 'enzyme';
import Moods, { isTired, isHyper, isEducated, isHungry, getFace } from './Moods';

describe('container', () => {
  it('matches a snapshot', () => {
    const wrapper = shallow(<Moods />);
    expect(wrapper).toMatchSnapshot();
  });
});
