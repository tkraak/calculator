import test from 'ava';
import { fake } from 'sinon';
import rewire from 'rewire';
const createResultStringRewired = rewire('../src/components/create-result-string');
import { button } from './fixtures/button';

const { createResultString } = createResultStringRewired;

test('1', t => {
  const key = button('1');
  const getKeyTypeFake = fake.returns('number');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '0', {}), '1');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('11', t => {
  const key = button('1');
  const getKeyTypeFake = fake.returns('number');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '1', {}), '11');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('1 +', t => {
  const key = button('+');
  const getKeyTypeFake = fake.returns('operator');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '1', { previousKeyType: 'number' }), '1');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('1 + 1 =', t => {
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

test('1 + 1 +', t => {
  const key = button('+');
  const state = { firstValue: '1', operator: 'add', previousKeyType: 'number' };
  const getKeyTypeFake = fake.returns('operator');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  const calculateFake = fake.returns(2);
  createResultStringRewired.__set__('calculate', calculateFake);
  t.is(createResultString(key, '1', state), 2);
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
  t.true(calculateFake.calledOnce);
  t.true(calculateFake.calledWith('1', 'add', '1'));
})

test('1 + 1 = =', t => {
  const key = button('=');
  const state = { firstValue: '1', modValue: '1', operator: 'add', previousKeyType: 'calculate' };
  const getKeyTypeFake = fake.returns('calculate');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  const calculateFake = fake.returns(3);
  createResultStringRewired.__set__('calculate', calculateFake);
  t.is(createResultString(key, '2', state), 3);
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
  t.true(calculateFake.calledOnce);
  t.true(calculateFake.calledWith('2', 'add', '1'));
})

test('=', t => {
  const key = button('=');
  const getKeyTypeFake = fake.returns('calculate');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '0', {}), '0');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('CE', t => {
  const key = button('CE');
  const getKeyTypeFake = fake.returns('clear');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '1', {}), 0);
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('1.', t => {
  const key = button('.');
  const getKeyTypeFake = fake.returns('decimal');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '1', {}), '1.');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('2..', t => {
  const key = button('.');
  const getKeyTypeFake = fake.returns('decimal');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '2.0', { previousKeyType: 'decimal' }), '2.0');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('3.5 + .', t => {
  const key = button('.');
  const getKeyTypeFake = fake.returns('decimal');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '3.5', { previousKeyType: 'operator' }), '0.');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})

test('invalid key type', t => {
  const key = button('1');
  const getKeyTypeFake = fake.returns('invalid');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key, '0', {}), undefined);
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})
