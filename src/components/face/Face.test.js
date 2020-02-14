import React from 'react';
import { shallow } from 'enzyme';
import Face from './Face';
import Provider from 'react-redux';
import store from '../../store';

describe('Face component', () => {
  it('renders Face', () => {
    const wrapper = shallow(<Provider store={store}> <Face emoji=":grinning:" /></Provider>).dive;
    expect(wrapper).toMatchSnapshot();
  });
});
  
