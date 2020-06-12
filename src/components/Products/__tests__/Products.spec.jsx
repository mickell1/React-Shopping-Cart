import React from 'react';
import { shallow } from 'enzyme';
import Products from '../Products';
import LoadingProducts from '../../Skeletons/ProductSkeleton/LoadingProducts';

describe('Products', () => {
  let wrapper;

  const defaultProps = {
    productsList: [],
    searchingFor: jest.fn(),
  }

  beforeEach(() => {
    wrapper = shallow(<Products {...defaultProps} /> )  
  })

  it('should render the Products Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render LoadingProducts when productsList is empty', () => {
     wrapper = shallow(
      <Products {...defaultProps} />
    );

    expect(wrapper.find('div').first().props().children).toEqual(<LoadingProducts />);
    expect(wrapper.find('div').first().hasClass('products-wrapper')).toEqual(true);
  });
});