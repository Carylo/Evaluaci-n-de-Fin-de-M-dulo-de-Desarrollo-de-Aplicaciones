const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});

test('la divicion de 4 entre 2 debe ser 2', () => {
  expect(calculator.divide(4, 2)).toBe(2)
})

test('la divicion de 12 entre 3 debe ser 4', () => {
  expect(calculator.divide(12, 3)).toBe(4)
})

test('la multiplicacion de 12 entre 3 debe ser 36', () => {
  expect(calculator.multiply(12, 3)).toBe(36)
})

test('la multiplicacion de 8 entre 3 debe ser 24', () => {
  expect(calculator.multiply(8, 3)).toBe(24)
})

test('la divicion de 8 entre 0 debe ser error', () => {
  expect(calculator.divide(8, 0)).toBe(Infinity)
})

test('la divicion de 0 entre 8 debe valida', () => {
  expect(calculator.divide(0, 8)).toBe(0)
})