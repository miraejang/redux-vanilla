import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

number.innerText = 0;

const ADD = 'add';
const MINUS = 'minus';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
const countStore = createStore(countModifier);

const updateText = () => {
  number.innerText = countStore.getState();
};
countStore.subscribe(updateText);
const handleAdd = () => countStore.dispatch({ type: ADD });
const handleMinus = () => countStore.dispatch({ type: MINUS });

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
