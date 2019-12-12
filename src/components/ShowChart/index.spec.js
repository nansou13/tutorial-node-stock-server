import React from 'react'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import { expect } from 'chai'
import { LineChart } from 'recharts'
import ShowChart from '.'

// Use array destructurig to create mock functions.
// let [editTodo, toggleTodo, deleteTodo] = new Array(3).fill(jest.fn());

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

describe('<ShowChart />', () => {
  it('should render appropriately', () => {
    const props = {
      data: arrayValues,
      maxValue: 20,
    }
    const tree = renderer.create(<ShowChart {...props} />).toJSON()
    expect(tree).matchSnapshot()
  })

  it('should render appropriately LineChart', () => {
    const props = {
      data: arrayValues,
      maxValue: 20,
    }
    const wrapper = shallow(<ShowChart {...props} />)
    expect(wrapper.find(LineChart))
      .to.exist()
      .to.have.prop('data')
  })
})
