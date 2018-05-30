import test from 'ava';
import { calculate } from '../src/components/calculate';

test('it adds 2 numbers', t => {
  t.is(calculate(4, 'add', 4), 8);
});
