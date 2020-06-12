import React from 'react';
import { shallow, mount } from 'enzyme';
import BasketScrollBar from '../BasketScrollBar';

describe('BasketScrollBar', () => {
  const defaultProps = {
    children: 'Hello',
  };

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<BasketScrollBar {...defaultProps} /> )  
  })

  it('should render the BasketScrollBar Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render props', () => {
    wrapper = mount(<BasketScrollBar {...defaultProps} />)
    expect(wrapper.find('Scrollbars').first().text()).toBe('Hello')
  })
});