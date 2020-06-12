import React from 'react';
import { shallow } from 'enzyme';
import Product from '../Product';

describe('Product', () => {
  let wrapper;

  const defaultProps = {
    image: 'Iphone',
    title: 'Iphone x',
    price: 800,
    productId: 1,
    quantity: 1,
    updateQuantity: jest.fn(),
    addToBasket: jest.fn()
  }

  beforeEach(() => {
    wrapper = shallow(<Product {...defaultProps} /> )  
  })

  it('should render the Product Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should call quickView', () => {
    const props = { ...defaultProps, openModal: jest.fn(), quickView: jest.fn() }

     wrapper = shallow(
      <Product {...props} />
    );

    const image = wrapper.find('img').first();
    image.simulate('click');

    expect(props.openModal).toHaveBeenCalled();
  });

  it('should call addToBasket', () => {
    const props = { ...defaultProps, addToBasket: jest.fn() }

     wrapper = shallow(
      <Product {...props} />
    );

    const button = wrapper.find('Button').first();
    button.simulate('click');

    expect(props.addToBasket).toHaveBeenCalled();
    expect(wrapper.find('div').first().hasClass('product')).toEqual(true);
  });
});