import { expect } from 'chai'
import * as actions from './global.action'

describe('Globals actions', () => {
  it('should create an action to give value on appLoad', () => {
    const values = []
    const expectedAction = {
      type: actions.APP_LOAD,
      payload: { values },
    }
    expect(actions.appLoad(values)).to.eql(expectedAction)
  })
  it('should create an action to give value on saveData', () => {
    const value = {}
    const expectedAction = {
      type: actions.SAVE_DATA,
      payload: { value },
    }
    expect(actions.saveData(value)).to.eql(expectedAction)
  })
  it('should create an action to give value on updateData', () => {
    const { id, value, type } = { id: 1, value: 34, type: 'CAC40' }
    const expectedAction = {
      type: actions.UPDATE_DATA,
      payload: { id, value, type },
    }
    expect(actions.updateData(id, value, type)).to.eql(expectedAction)
  })
  it('should create an action for pauseForEdition', () => {
    const expectedAction = {
      type: actions.PAUSE_FOR_EDITION,
    }
    expect(actions.pauseForEdition()).to.eql(expectedAction)
  })
  it('should create an action to resume', () => {
    const expectedAction = {
      type: actions.RESUME,
    }
    expect(actions.resume()).to.eql(expectedAction)
  })
})
