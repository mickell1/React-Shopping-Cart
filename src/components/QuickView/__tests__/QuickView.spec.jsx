import React from 'react';
import { shallow } from 'enzyme';
import QuickView from '../QuickView';

describe('QuickView', () => {
  let wrapper;

  const defaultProps = {
    closeModal: jest.fn(),
    handleClose: jest.fn(),
    product: {
      title: 'Samsung Galaxy S7',
      price: 500,
      image: null,
    }
  }

  beforeEach(() => {
    wrapper = shallow(<QuickView {...defaultProps} /> )  
  })

  it('should render the QuickView Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});