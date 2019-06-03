import React from 'react';
import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import stores from './store';
import { Provider } from 'mobx-react';
console.log(stores)
function App(props) {
  return (
    <Provider {...stores}>
      <div className="App">
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
