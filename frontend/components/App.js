import React, { Component } from 'react';
import TodoList from './frontend/components/TodoList';
import Form from './frontend/components/Form';
import './App.css';

class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.fetchTodos();
  }

  fetchTodos() {
    fetch('http://localhost:9000/api/todos')
      .then(response => response.json())
      .then(data => {
        this.setState({ todos: data });
      })
      .catch(error => {
        console.error('Error fetching todos:', error);
      });
  }

  handleToggle = id => {
    fetch(`http://localhost:9000/api/todos/${id}`, {
      method: 'PATCH',
    })
      .then(response => response.json())
      .then(updatedTodo => {
        this.setState(prevState => ({
          todos: prevState.todos.map(todoItem =>
            todoItem.id === updatedTodo.id ? updatedTodo : todoItem
          ),
        }));
      })
      .catch(error => {
        console.error('Error toggling todo:', error);
      });
  };

  handleAddTodo = newTodo => {
    fetch('http://localhost:9000/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newTodo }),
    })
      .then(response => response.json())
      .then(newTodo => {
        this.fetchTodos(); // Fetch updated todos after adding
      })
      .catch(error => {
        console.error('Error creating todo:', error);
      });
  };

  handleFilterCompleted = () => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => !todo.completed),
    }));
  };

  render() {
    const { todos } = this.state;

    return (
      <div className="App">
        <h1>Todo App</h1>
        <Form handleAddTodo={this.handleAddTodo} />
        <TodoList todos={todos} handleToggle={this.handleToggle} />
        <button onClick={this.handleFilterCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
