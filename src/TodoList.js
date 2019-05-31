import React from 'react';
import { observer } from 'mobx-react';

@observer
class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: '',
    };
  }

  doAdd = () => {
    this.props.todoStore.addTodo(this.state.task);
  };

  doInputChange = evt => {
    this.setState({ task: evt.target.value });
  };
  render() {
    const { todoStore } = this.props;
    console.log(todoStore);
    return (
      <div>
        <h1>TODO</h1>
        <input value={this.state.task} onChange={this.doInputChange} />
        <button onClick={this.doAdd}>Add</button>
        <p>{todoStore.report}</p>
        <ul>
          {todoStore.todos.map(item => {
            return <li key={item.id}>{item.task}</li>;
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;
