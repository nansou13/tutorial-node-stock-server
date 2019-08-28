import { expect } from 'chai'
import { closestToZero } from './helpers'

describe('Unit tests With ES6', () => {
  it('undefined', () => {
    expect(closestToZero()).to.equal(0)
  })
  it('Simple [8,5,10]', () => {
    expect(closestToZero([8, 5, 10])).to.equal(5)
  })
  it('Negative value [8,-5,10]', () => {
    expect(closestToZero([8, -5, 10])).to.equal(-5)
  })
  it('Empty array', () => {
    expect(closestToZero([])).to.equal(0)
  })
  it('With 0 in values', () => {
    expect(closestToZero([2, 5, -1, 0])).to.equal(0)
  })
  it('With null in values', () => {
    expect(closestToZero([null, null])).to.equal(0)
  })
  it('With null in values bis', () => {
    expect(closestToZero([null, -1, null])).to.equal(-1)
  })
  it('With letters in values', () => {
    expect(closestToZero(['a', 'f'])).to.equal(0)
  })
  it('Same value with last negative [5,6, -10, 1, 8, -1]', () => {
    expect(closestToZero([5, 6, -10, 1, 8, -1])).to.equal(1)
  })
  it('Same value with last positive [5, -10, -1, 1]', () => {
    expect(closestToZero([5, 6, -10, -1, 8, 1])).to.equal(1)
  })
})
