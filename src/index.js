const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const createToDo = toDo => {
  console.log(toDo);
  const li = document.createElement('li');
  li.innerText = toDo;
  ul.appendChild(li);
};

const onSubmit = e => {
  e.preventDefault();
  const toDo = input.value;
  createToDo(toDo);
  input.value = '';
};

form.addEventListener('submit', onSubmit);
