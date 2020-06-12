import React from 'react';
import { shallow, mount } from 'enzyme';
import EmptyBasket from '../EmptyBasket';

describe('EmptyBasket', () => {

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<EmptyBasket /> )  
  })

  it('should render the EmptyBasket Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render classname', () => {
    wrapper = mount(
     <EmptyBasket />
   );

   expect(wrapper.find('div').first().hasClass('empty-basket')).toEqual(true);
 });

  it('should render h2', () => {
    wrapper = mount(<EmptyBasket />)
    expect(wrapper.find('h2').text()).toBe('Your basket is empty!')
  })
});