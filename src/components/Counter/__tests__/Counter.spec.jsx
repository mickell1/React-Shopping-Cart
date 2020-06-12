import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';

describe('Counter', () => {
  let wrapper;

  const defaultProps = {
    state: {
      value: 1,
    },
    updateQuantity: jest.fn(),
  }

  beforeEach(() => {
    wrapper = shallow(<Counter {...defaultProps} /> )  
  })

  it('should render the Counter Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});