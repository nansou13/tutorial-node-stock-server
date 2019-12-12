import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'
import renderer from 'react-test-renderer'
import ShowInput from '.'

const arrayValues = [
  {
    timestamp: 1576096456540,
    index: 1,
    stocks: {
      NASDAQ: 9.971326761277012,
      CAC40: 145.293302630023,
    },
  },
  {
    timestamp: 1576096457561,
    index: 2,
    stocks: {
      NASDAQ: 9.985167754304092,
      CAC40: 90.40672503192006,
    },
  },
  {
    timestamp: 1576096458561,
    index: 3,
    stocks: {
      NASDAQ: 9.981823896775474,
      CAC40: 90.39017756930647,
    },
  },
]

describe('<ShowInput />', () => {
  it('should render appropriately', () => {
    const handleChange = jest.fn()
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()
    const props = {
      data: arrayValues,
      type: 'CAC40',
      handleChange,
      handleFocus,
      handleBlur,
      maxValue: 20,
    }
    const tree = renderer.create(<ShowInput {...props} />).toJSON()
    expect(tree).matchSnapshot()
  })
  it('should have x elements', () => {
    const handleChange = jest.fn()
    const handleFocus = jest.fn()
    const handleBlur = jest.fn()
    const props = {
      data: arrayValues,
      type: 'CAC40',
      handleChange,
      handleFocus,
      handleBlur,
      maxValue: 20,
    }
    const wrapper = shallow(<ShowInput {...props} />)
    expect(wrapper.find('td')).to.have.length(4)
  })
})
