import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
function App(props) {
  return (
    <div className="App">
      <TodoList todoStore={props.store.todoStore} />
    </div>
  );
}

export default App;
