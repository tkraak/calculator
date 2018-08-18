import test from 'ava';
import { getKeyType } from '../src/components/get-key-type';
import { action } from './fixtures/datasets';

test('operator', t => {
  t.true(getKeyType(action('add')) === 'operator');
  t.true(getKeyType(action('subtract')) === 'operator');
  t.true(getKeyType(action('multiply')) === 'operator');
  t.true(getKeyType(action('divide')) === 'operator');
})

test('number', t => {
  t.true(getKeyType(action(undefined)) === 'number');
})

test('action', t => {
  t.true(getKeyType(action('calculate')) === 'calculate');
  t.true(getKeyType(action('clear')) === 'clear');
  t.true(getKeyType(action('decimal')) === 'decimal');
})
