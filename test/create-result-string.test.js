import test from 'ava';
import { fake } from 'sinon';
import rewire from 'rewire';
const createResultStringRewired = rewire('../src/components/create-result-string');
import { key } from './fixtures/button';

const { createResultString } = createResultStringRewired;
const getKeyTypeFake = fake.returns('number');
createResultStringRewired.__set__('getKeyType', getKeyTypeFake);

test('enter first number', t => {
  const getKeyTypeFake = fake.returns('number');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key('1'), '0', {}), '1');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key('1')));
})

test('enter a second number right after first number', t => {
  const getKeyTypeFake = fake.returns('number');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key('1'), '1', {}), '11');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key('1')));
})

test('enter `+` operator after number', t => {
  const getKeyTypeFake = fake.returns('operator');
  createResultStringRewired.__set__('getKeyType', getKeyTypeFake);
  t.is(createResultString(key('+'), '1', { previousKeyType: 'number' }), '1');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key('+')));
})
