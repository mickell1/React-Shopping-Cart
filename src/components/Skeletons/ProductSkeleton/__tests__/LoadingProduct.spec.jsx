import React from 'react';
import { shallow, mount } from 'enzyme';
import LoadingProduct from '../LoadingProduct';

describe('LoadingProduct', () => {
  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<LoadingProduct /> )  
  })

  it('should render the LoadingProduct Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render div with classname', () => {
    wrapper = mount(<LoadingProduct />)
    expect(wrapper.find('div').first().hasClass('product loading')).toEqual(true);
  })
});