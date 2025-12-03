const nextBigger = require('.')

test('Test 1', () => {
    expect(nextBigger(12)).toBe(21)
})
test('Test 2', () => {
    expect(nextBigger(513)).toBe(531)
})
test('Test 3', () => {
    expect(nextBigger(2017)).toBe(2071)
})
test('Test 4', () => {
    expect(nextBigger(414)).toBe(441)
})
test('Test 5', () => {
    expect(nextBigger(144)).toBe(414)
})
test('Test 6', () => {
    expect(nextBigger(531)).toBe(-1)
})