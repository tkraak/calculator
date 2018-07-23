import test from 'ava';
import { fake } from 'sinon';
import rewire from 'rewire';
const createResultStringRewired = rewire('../src/components/create-result-string');
import { button } from './fixtures/button';

const { createResultString } = createResultStringRewired;

test('enter first number', t => {
  const key = button('1');
  const getKeyTypeFake = fake.returns('number');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '0', {}), '1');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('enter a second number right after first number', t => {
  const key = button('1');
  const getKeyTypeFake = fake.returns('number');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '1', {}), '11');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('enter `+` operator after number', t => {
  const key = button('+');
  const getKeyTypeFake = fake.returns('operator');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '1', { previousKeyType: 'number' }), '1');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('enter `=` operator after second number', t => {
  const key = button('=');
  const state = { firstValue: '1', operator: 'add', previousKeyType: '1' };
  const getKeyTypeFake = fake.returns('calculate');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  const calculateFake = fake.returns(2);
  createResultStringRewired.__set__('calculate', calculateFake);
  t.is(createResultString(key, '1', state), 2);
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
  t.true(calculateFake.calledOnce);
  t.true(calculateFake.calledWith('1', 'add', '1'));
})

test('clear', t => {
  const key = button('CE');
  const getKeyTypeFake = fake.returns('clear');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '1', {}), 0);
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('enter decimal after number', t => {
  const key = button('.');
  const getKeyTypeFake = fake.returns('decimal');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '1', {}), '1.');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('enter two decimals', t => {
  const key = button('.');
  const getKeyTypeFake = fake.returns('decimal');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '2.0', { previousKeyType: 'decimal' }), '2.0');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('enter second decimal after operator', t => {
  const key = button('.');
  const getKeyTypeFake = fake.returns('decimal');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '3.5', { previousKeyType: 'operator' }), '0.');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})
