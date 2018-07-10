import test from 'ava';
import { fake } from 'sinon';
import rewire from 'rewire';
const createResultStringRewired = rewire('../src/components/create-result-string');
import { button as key } from './fixtures/button';

const { createResultString } = createResultStringRewired;
const getKeyTypeFake = fake.returns('number');
createResultStringRewired.__set__('getKeyType', getKeyTypeFake);

test('should return `1`', t => {
  t.is(createResultString(key, '0', {}), '1');
  t.true(getKeyTypeFake.calledOnce);
  t.true(getKeyTypeFake.calledWith(key));
})
