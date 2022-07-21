const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.getElementById('number');

let count = 0;
number.innerText = count;

const updateText = () => {
  number.innerText = count;
};
const handleAdd = () => {
  count++;
  updateText();
};
const handleMinus = () => {
  const lowest = count - 1 < 0;
  count = lowest ? 0 : count - 1;
  updateText();
};

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
