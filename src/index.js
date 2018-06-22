import './main.css';
import { createResultString } from '../src/components/create-result-string';
import { updateCalculatorState } from '../src/components/update-calculator-state';
import { updateVisualState } from '../src/components/update-visual-state';

const calculator = document.querySelector('.calculator');
const display = calculator.querySelector('.calculator__display');
const keys = calculator.querySelector('.calculator__keys');

keys.addEventListener('click', e => {
  if (!e.target.matches('button')) return;
  const key = e.target;
  const displayedNum = display.textContent;
  const resultString = createResultString(
    key,
    displayedNum,
    calculator.dataset
  );

  display.textContent = resultString;
  updateCalculatorState(
    key,
    calculator,
    resultString,
    displayedNum
  );
  updateVisualState(key, calculator);
});
