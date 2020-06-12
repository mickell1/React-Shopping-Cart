import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingProducts from '../LoadingProducts';

describe('LoadingProducts', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<LoadingProducts /> )  
  })

  it('should render the LoadingProducts Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render div with classname', () => {
    wrapper = mount(<LoadingProducts />)
    expect(wrapper.find('div').first().hasClass('products loading')).toEqual(true);
  })

  it('should render LoadingProduct component', () => {
    wrapper = mount(<LoadingProducts />)
    expect(wrapper.find('LoadingProduct')).toBeTruthy();
    expect(wrapper.find('LoadingProduct').length).toBe(8);
  })
});