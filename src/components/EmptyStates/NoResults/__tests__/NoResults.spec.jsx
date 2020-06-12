import React from 'react';
import { shallow, mount } from 'enzyme';
import NoResults from '../NoResults';

describe('NoResults', () => {

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<NoResults /> )  
  })

  it('should render the NoResults Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render classname', () => {
    wrapper = mount(
     <NoResults />
   );

   expect(wrapper.find('div').first().hasClass('products')).toEqual(true);
 });

  it('should render h2', () => {
    wrapper = mount(<NoResults />)
    expect(wrapper.find('h2').text()).toBe('Sorry, no products matched your search!')
  })

  it('should render p', () => {
    wrapper = mount(<NoResults />)
    expect(wrapper.find('p').text()).toBe('Enter a different keyword and try.')
  })
});