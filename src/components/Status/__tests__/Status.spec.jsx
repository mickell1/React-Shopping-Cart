import React from 'react'
import { shallow } from 'enzyme'
import Status from '../Status'

describe('Status', () => {
  const defaultProps = {
    code: 404,
    children: '<div />',
  }
  
  let wrapper;
  
  beforeEach(()=>{
    wrapper = shallow(<Status {...defaultProps} /> )  
  })
  
  it('should render the Status Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });
});

