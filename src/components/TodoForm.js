import React from "react";

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: "",
    };
  }

  handleChanges = (e) => {
    this.setState({ item: e.target.value });
    console.log(
      "JS: TodoList.js: handleChanges: e.target.value: ",
      e.target.value
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addItem(this.state.item);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="item"
          value={this.state.item}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
