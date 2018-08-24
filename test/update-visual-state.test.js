import test from 'ava';
import { fake, spy } from 'sinon';
import rewire from 'rewire';
const updateVisualStateRewired = rewire('../src/components/update-visual-state');
import { button } from './fixtures/button';

const { updateVisualState } = updateVisualStateRewired;
const key = button('1');
const querySelector = fake.returns({ textContent: 'AC' })
const calculator = { querySelector };

test('remove is-depressed', t => {
  const remove = spy();
  key.parentNode.children[0].classList.remove = remove;
  const getKeyType = fake.returns('clear');
  updateVisualStateRewired.__set__('getKeyType', getKeyType);
  updateVisualState(key);
  t.true(getKeyType.calledOnce);
  t.true(getKeyType.calledWith(key));
  t.true(remove.calledOnce);
})

test('clear button says CE', t => {
  const getKeyType = fake.returns('number');
  updateVisualStateRewired.__set__('getKeyType', getKeyType);
  updateVisualState(key, calculator);
  t.true(getKeyType.calledOnce);
  t.true(getKeyType.calledWith(key));
  t.true(querySelector.calledWith('[data-action=clear]'));
})

test('add is-depressed', t => {
  const add = spy();
  key.classList.add = add;
  const getKeyType = fake.returns('operator');
  updateVisualStateRewired.__set__('getKeyType', getKeyType);
  updateVisualState(key, calculator);
  t.true(getKeyType.calledOnce);
  t.true(getKeyType.calledWith(key));
  t.true(add.calledOnce);
  t.true(querySelector.calledWith('[data-action=clear]'));
})
