import React, { Component } from 'react';

class Form extends Component {
  state = {
    newTodo: '',
  };

  handleInputChange = event => {
    this.setState({ newTodo: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { newTodo } = this.state;

    if (newTodo.trim() === '') {
      return; // Prevent adding empty todos
    }

    this.props.handleAddTodo(newTodo);
    this.setState({ newTodo: '' });
  };

  handleFilterCompleted = () => {
    // Filter out completed todos and update the state
    // (You can leave this as it is)
  };

  render() {
    const { newTodo } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            placeholder="Add a new todo"
            value={newTodo}
            onChange={this.handleInputChange}
          />
          <button type="submit">Add Todo</button>
        </form>
        <button onClick={this.handleFilterCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default Form;
