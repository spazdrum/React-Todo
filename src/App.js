import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import './components/Todo.css';

const todo = [
  {
    name: "Make Coffee",
    id: 123,
    completed: false,
  },
  {
    name: "Check Emails",
    id: 124,
    completed: false,
  },
  {
    name: "Drive Kids To School",
    id: 125,
    completed: false,
  },
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo,
    };
  }

  addItem = (itemName) => {
    this.setState({
      todo: [
        ...this.state.todo,
        { name: itemName, id: Date.now(), completed: false },
      ],
    });
  };

  toggleCompleted = (itemId) => {
    this.setState({
      todo: this.state.todo.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      }),
    });
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter((item) => {
        return !item.completed;
      }),
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Todo List</h1>
          <TodoForm addItem={this.addItem} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleCompleted={this.toggleCompleted}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;
