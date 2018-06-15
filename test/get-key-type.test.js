import test from 'ava';
import { getKeyType } from '../src/components/get-key-type';
import { operators } from './fixtures/datasets';

test('should return `operator`', t => {
  t.true(getKeyType(operators.add) === 'operator');
  t.true(getKeyType(operators.subtract) === 'operator');
  t.true(getKeyType(operators.multiply) === 'operator');
  t.true(getKeyType(operators.divide) === 'operator');
})

test('should return `number`', t => {
  t.true(getKeyType({ dataset: { action: undefined } }) === 'number');
})

test('should return action', t => {
  t.true(getKeyType(operators.calculate) === 'calculate');
  t.true(getKeyType(operators.clear) === 'clear');
  t.true(getKeyType(operators.decimal) === 'decimal');
})
