import React from 'react'
import { shallow, mount } from 'enzyme'
import ImageCarousel from '../ImageCarousel'

const defaultProps = {
  images: [
    'test',
    'test2',
  ],
  imageAltText: 'Test Text',
  componentDidMount: jest.fn(),
  componentWillUnmount: jest.fn(),
  clear: jest.fn(),
  fadeImages: jest.fn(),
}

let wrapper;

beforeEach(()=>{
  wrapper = shallow(<ImageCarousel {...defaultProps} /> )  
})

describe('ImageCarousel', () => {
  it('should render the ImageCarousel Component correctly', () => {   
    expect(wrapper).toMatchSnapshot();
  });

  it('should render props', () => {
    wrapper = mount(<ImageCarousel {...defaultProps} />)
    expect(wrapper.props().images).toEqual(['test', 'test2'])
    expect(wrapper.props().imageAltText).toEqual('Test Text')
  })
});
