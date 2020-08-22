import { getListItems } from './getListItems'

test('getListItems should return items as expected', () => {
  expect(getListItems('items=me%20likes,cookies')).toEqual([
    'Me likes',
    'Cookies',
  ])
})

test('getListItems should return empty array if items not defined', () => {
  expect(getListItems('cookies=ab,cd')).toEqual([])
})

test('getListItems should return empty params empty', () => {
  expect(getListItems('')).toEqual([])
})
