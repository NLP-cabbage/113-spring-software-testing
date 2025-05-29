const assert = require('assert');
const { test } = require('node:test');
const Calculator = require('../src/calculator');

// base: 1, 1, 12, 31, 1

// throw new Error
test('month1 too small', () => {
  assert.throws(() => Calculator.main(0, 1, 12, 31, 1), /invalid month1/);
});
test('month1 too large', () => {
  assert.throws(() => Calculator.main(13, 1, 12, 31, 1), /invalid month1/);
});
test('month2 too small', () => {
  assert.throws(() => Calculator.main(1, 1, 0, 31, 1), /invalid month2/);
});
test('month2 too large', () => {
  assert.throws(() => Calculator.main(1, 1, 13, 31, 1), /invalid month2/);
});

test('day1 too small', () => {
  assert.throws(() => Calculator.main(1, 0, 12, 31, 1), /invalid day1/);
});
test('day1 too large', () => {
  assert.throws(() => Calculator.main(1, 32, 12, 31, 1), /invalid day1/);
});
test('day2 too small', () => {
  assert.throws(() => Calculator.main(1, 1, 12, 0, 1), /invalid day2/);
});
test('day2 too large', () => {
  assert.throws(() => Calculator.main(1, 1, 12, 32, 1), /invalid day2/);
});

test('year too small', () => {
  assert.throws(() => Calculator.main(1, 1, 1, 1, 0), /invalid year/);
});
test('year too large', () => {
  assert.throws(() => Calculator.main(1, 1, 1, 1, 10001), /invalid year/);
});

test('same month but day1 > day2', () => {
  assert.throws(() => Calculator.main(3, 15, 3, 10, 1),
    /day1 must be less than day2 if month1 is equal to month2/);
});
test('month1 > month2', () => {
  assert.throws(() => Calculator.main(5, 1, 4, 30, 1),
    /month1 must be less than month2/);
});

// correct case, unit testing
test('same month interval', () => {
  const days = Calculator.main(6, 5, 6, 20, 1);
  assert.strictEqual(days, 15);
});
test('cross month non-leap', () => {
  const days = Calculator.main(2, 28, 3, 5, 1);
  assert.strictEqual(days, 5);
});
test('cross month leap year', () => {
  const days = Calculator.main(2, 28, 3, 1, 2020);
  assert.strictEqual(days, 2);
});
test('multi-month span', () => {
  const days = Calculator.main(1, 31, 3, 1, 1);
  assert.strictEqual(days, 29);
});
test('cross month upper month boundary valid', () => {
  assert.strictEqual(Calculator.main(11, 1, 12, 1, 1), 30);
});
test('same month upper day boundary valid', () => {
  assert.strictEqual(Calculator.main(6, 1, 6, 31, 1), 30);
});
test('lower year boundary valid', () => {
  assert.strictEqual(Calculator.main(1, 1, 2, 1, 1), 31);
});
test('upper year boundary valid', () => {
  assert.strictEqual(Calculator.main(1, 1, 2, 1, 10000), 31);
});
test('same month same day', () => {
  assert.strictEqual(Calculator.main(5, 5, 5, 5, 1), 0);
});
test('century non-leap year', () => {
  assert.strictEqual(Calculator.main(2, 28, 3, 1, 1900), 1);
});
test('century leap year', () => {
  assert.strictEqual(Calculator.main(2, 28, 3, 1, 2000), 2);
});
test('lower month2 boundary valid', () => {
  const days = Calculator.main(1, 1, 1, 2, 1);
  assert.strictEqual(days, 1);
});
test('upper month1 boundary valid', () => {
  const days = Calculator.main(12, 1, 12, 2, 1);
  assert.strictEqual(days, 1);
});