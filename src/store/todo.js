import { observable, computed, autorun, action } from 'mobx';
class TodoStore {
  @observable todos = [{
    id: 'jojph9msko8',
    task: 'react-mobx demo',
    completed: false,
    assignee: null
  }];
  @observable pendingRequests = 0;

  constructor() {
    autorun(() => {
      console.log(this.report)
    })
  }

  @computed get completedTodosCount() {
    return this.todos.filter(todo => todo.completed  === true).length
  }

  @computed get report() {
    if (this.todos.length == 0) {
      return 'none'
    }
    return `Next todo: "${this.todos[0].task}". Progress: ${this.completedTodosCount}/${this.todos.length}`
  }

  @action addTodo(task) {
    this.todos.push({
      id: Math.random().toString(36).substr(2),
      task,
      completed: false,
      assignee: null
    })
  }

}

export default new TodoStore;
