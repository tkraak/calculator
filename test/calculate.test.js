import test from 'ava';
import { calculate } from '../src/components/calculate';

test('it adds 2 numbers', t => {
  t.is(calculate(4, 'add', 4), 8);
});

test('it subtracts 2 numbers', t => {
  t.is(calculate(4, 'subtract', 4), 0);
});

test('it subtracts 2 numbers', t => {
  t.is(calculate(4, 'subtract', 4), 0);
});

test('it multiplies 2 numbers', t => {
  t.is(calculate(4, 'multiply', 4), 16);
});

test('it divides 2 numbers', t => {
  t.is(calculate(4, 'divide', 4), 1);
});
