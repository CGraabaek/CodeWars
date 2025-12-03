const booleanToString = require('.')

test('Test 1', () => {
  expect(booleanToString(true)).toBe('Yes')
})

test('Test 2', () => {
  expect(booleanToString(false)).toBe('No')
})
