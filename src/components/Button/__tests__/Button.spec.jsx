import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../Button';

describe('Button', () => {
  let wrapper;

  const defaultProps = {
    className: 'button',
    type: 'button',
    disabled: false,
  }

  beforeEach(() => {
    wrapper = shallow(<Button {...defaultProps} /> )  
  })

  it('should render the Button Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should take new classname', () => {
     wrapper = mount(
      <Button className='button test' />
    );

    expect(typeof wrapper.props().className).toBe('string');
    expect(wrapper.find('.button').first().hasClass('button test')).toEqual(true);
  });

  it('should take new type', () => {
    wrapper = mount(
     <Button type='submit' />
   );

   expect(typeof wrapper.props().type).toBe('string');
  });

  it('should have disabled prop', () => {
    wrapper = mount(
     <Button disabled />
   );

   expect(typeof wrapper.props().disabled).toBe('boolean');
   expect(wrapper.props().disabled).toBe(true);

   wrapper.props().disabled = false;
   expect(wrapper.props().disabled).toBe(false);
  });

  it('should have a value', () => {
    wrapper = mount(
     <Button>{'Add to trolley'}</Button>
   );

   expect(typeof wrapper.props().children).toBe('string');
   expect(wrapper.props().children).toBe('Add to trolley');
  });

  it('should call mock function when button is clicked', () => {
    const onClick = jest.fn();

    wrapper = mount(
      <Button name='button test' onClick={onClick} />
    );
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should disable button', () => {
    const onClick = jest.fn();

    wrapper = mount(
      <Button name='button test' disabled onClick={onClick} />
    );
    wrapper.simulate('click');

    expect(wrapper.props().disabled).toBe(true);
    expect(onClick).toBeCalledTimes(0);
  });
});