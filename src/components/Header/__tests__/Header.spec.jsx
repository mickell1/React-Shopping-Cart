import React from 'react'
import { shallow, mount } from 'enzyme'
import Header from '../Header'

jest.mock('../Header.scss', () => ({
  header: 'header',
  'logo-container': 'logo-container',
}))

describe('Header', () => {
  const defaultProps = {
    showBasket: false,
    basketItems: [
      {
        productId: '5493179',
        sku: '549/3179',
        title: 'Russell Hobbs Pennine Illuminating S Steel Kettle 20444',
        price: 24.99,
        image: 'https://media.4rgos.it/s/Argos/9805244_R_SET?w=110&h=130',
      }
    ],
    mobileSearch: false,
    handleBasket: jest.fn(),
    handleSubmit: jest.fn(),
    handleMobileSearch: jest.fn(),
    handleSearchNav: jest.fn(),
    handleClickOutside: jest.fn(),
    removeProduct: jest.fn()
  }

  let wrapper;

  beforeEach(()=>{
    wrapper = shallow(<Header {...defaultProps} /> )  
  })

  it('should render the Header Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  // it('renders header', () => {
  //   expect(wrapper.find('.container')).toHaveLength(1)
  // })
  // it('renders argos logo', () => {
  //   expect(wrapper.find('.logo')).toHaveLength(1)
  // })

  // it('should render props', () => {
  //   wrapper = mount(<Header {...defaultProps} />)
  //   expect(wrapper.find('EmptyBasket')).toBeTruthy()
  // })
});
