// https://github.com/diegohaz/arc/wiki/Selectors#unit-testing-selectors
// https://github.com/diegohaz/arc/wiki/Example-redux-modules#resource
import * as selectors from './selectors'

test('initialState', () => {
  expect(selectors.initialState).toEqual({
    list: [],
    detail: null,
  })
})

test('getList', () => {
  expect(selectors.getList({})).toBe(selectors.initialState.list)
  expect(selectors.getList()).toBe(selectors.initialState.list)
  expect(selectors.getList(selectors.initialState)).toBe(selectors.initialState.list)
})

test('getDetail', () => {
  expect(selectors.getDetail({})).toBe(selectors.initialState.detail)
  expect(selectors.getDetail()).toBe(selectors.initialState.detail)
  expect(selectors.getDetail(selectors.initialState)).toBe(selectors.initialState.detail)
})
