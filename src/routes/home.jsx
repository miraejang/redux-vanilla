import React, { useState } from 'react';
import { connect } from 'react-redux';
import ToDo from '../components/to_do';
import { actionCreators } from '../store';

const Home = ({ toDos, addToDo }) => {
  const [toDo, setToDo] = useState('');

  const onChange = e => {
    const value = e.currentTarget.value;
    setToDo(value);
  };
  const onSubmit = e => {
    e.preventDefault();
    addToDo(toDo);
    setToDo('');
  };

  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={onSubmit}>
        <input value={toDo} onChange={onChange} type="text" name="" id="" />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </div>
  );
};

function mapStateToProps(state) {
  return { toDos: state };
}

function mapDispatchToProps(dispatch) {
  return { addToDo: toDo => dispatch(actionCreators.addToDo(toDo)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
