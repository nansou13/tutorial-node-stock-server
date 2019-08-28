import { expect } from 'chai'
import * as actions from './global.action'

describe('Globals actions', () => {
  it('should create an action to give value on appLoad', () => {
    const value = 'Finish docs'
    const expectedAction = {
      type: actions.APP_LOAD,
      payload: { value },
    }
    expect(actions.appLoad({ value })).to.eql(expectedAction)
  })
})
