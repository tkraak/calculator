import test from 'ava';
import { calculate } from '../src/components/calculate';

test('4 + 4', t => {
  t.is(calculate(4, 'add', 4), 8);
});

test('4 - 4', t => {
  t.is(calculate(4, 'subtract', 4), 0);
});

test('4 * 4', t => {
  t.is(calculate(4, 'multiply', 4), 16);
});

test('4/4', t => {
  t.is(calculate(4, 'divide', 4), 1);
});

test('invalid operator', t => {
  t.is(calculate(4, 'invalid', 4), undefined);
});
