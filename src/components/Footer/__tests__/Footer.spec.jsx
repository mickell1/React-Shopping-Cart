import React from 'react';
import { shallow, mount } from 'enzyme';
import Footer from '../Footer';

describe('Footer', () => {

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Footer /> )  
  })

  it('should render the Footer Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render classnames', () => {
    wrapper = mount(
     <Footer />
   );

   expect(wrapper.find('footer').first().hasClass('footer')).toEqual(true);
   expect(wrapper.find('p').first().hasClass('footer-links')).toEqual(true);
 });
});