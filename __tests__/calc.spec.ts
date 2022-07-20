const calc = (a: number, b: number): number => a - b

test('The calculation result should be 996.', () => {
  expect(calc(1024, 28)).toBe(996)
})
