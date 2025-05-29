// @ts-nocheck
const assert = require('assert');
const { test } = require('node:test');
const Calculator = require('../src/calculator');

//
// 1. 無效輸入：month1/month2 範圍外
//
test('month1 too small', () => {
  assert.throws(() => Calculator.main(0, 1, 2, 1, 2021), /invalid month1/);
});
test('month1 too large', () => {
  assert.throws(() => Calculator.main(13, 1, 2, 1, 2021), /invalid month1/);
});
test('month2 too small', () => {
  assert.throws(() => Calculator.main(1, 1, 0, 1, 2021), /invalid month2/);
});
test('month2 too large', () => {
  assert.throws(() => Calculator.main(1, 1, 13, 1, 2021), /invalid month2/);
});

//
// 2. 無效輸入：day1/day2 範圍外
//
test('day1 too small', () => {
  assert.throws(() => Calculator.main(1, 0, 2, 1, 2021), /invalid day1/);
});
test('day1 too large', () => {
  assert.throws(() => Calculator.main(1, 32, 2, 1, 2021), /invalid day1/);
});
test('day2 too small', () => {
  assert.throws(() => Calculator.main(1, 1, 2, 0, 2021), /invalid day2/);
});
test('day2 too large', () => {
  assert.throws(() => Calculator.main(1, 1, 2, 32, 2021), /invalid day2/);
});

//
// 3. 無效輸入：year 範圍外
//
test('year too small', () => {
  assert.throws(() => Calculator.main(1, 1, 2, 1, 0), /invalid year/);
});
test('year too large', () => {
  assert.throws(() => Calculator.main(1, 1, 2, 1, 10001), /invalid year/);
});

//
// 4. 邏輯錯誤：同月但 day1 > day2
//
test('same month but day1 > day2', () => {
  assert.throws(() => Calculator.main(3, 15, 3, 10, 2021),
    /day1 must be less than day2 if month1 is equal to month2/);
});

//
// 5. 邏輯錯誤：month1 > month2
//
test('month1 > month2', () => {
  assert.throws(() => Calculator.main(5, 1, 4, 30, 2021),
    /month1 must be less than month2/);
});

//
// 6. 正常計算：同月內
//
test('same month interval', () => {
  const days = Calculator.main(6, 5, 6, 20, 2021);
  assert.strictEqual(days, 15);
});

//
// 7. 正常計算：跨月，非閏年
//
test('cross month non-leap', () => {
  // 2/28 + 3/5
  const days = Calculator.main(2, 28, 3, 5, 2021);
  // 0-based ignore index: daysIn[2]=28，28到月底0天，加5天=5
  assert.strictEqual(days, 5);
});

//
// 8. 正常計算：跨月，閏年
//
test('cross month leap year', () => {
  // 2/28 + 3/1 in 2020 閏年，2月有29天
  const days = Calculator.main(2, 28, 3, 1, 2020);
  // days = 1 (29−28) + 1 = 2
  assert.strictEqual(days, 2);
});

//
// 9. 正常計算：多月累加
//
test('multi-month span', () => {
  // 1/31 → 3/1, year 2021
  const days = Calculator.main(1, 31, 3, 1, 2021);
  // 1/31→2/1: 1, +28 (Feb) +1 = 30
  assert.strictEqual(days, 30);
});
