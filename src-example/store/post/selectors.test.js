// https://github.com/diegohaz/arc/wiki/Selectors#unit-testing-selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#post
import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    list: [],
  })
})

test('getList', () => {
  expect(selectors.getList({})).toBe(selectors.initialState.list)
  expect(selectors.getList()).toBe(selectors.initialState.list)
  expect(selectors.getList(selectors.initialState)).toBe(selectors.initialState.list)
})
