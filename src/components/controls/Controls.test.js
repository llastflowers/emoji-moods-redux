import React from 'react';
import { shallow } from 'enzyme';
import Controls from './Controls';
import { Provider } from 'react-redux';
import store from '../../store';

describe('Controls component', () => {
  let wrapper;
  let handleSelection;
  beforeEach(() => {
    const actions = [
      { name: 'DO_STUFF', text: 'stuff' },
      { name: 'other' }
    ];
    handleSelection = jest.fn();

    const wrapper = shallow(<Provider store={store}><Controls
      actions={actions}
      handleSelection={handleSelection} /></Provider>).dive;
    expect(wrapper).toMatchSnapshot();
  });

  it('renders Controls', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
  
