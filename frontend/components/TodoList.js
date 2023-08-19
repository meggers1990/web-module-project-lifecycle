import React from 'react';
import Todo from './frontend/components/Todo';

const TodoList = ({ todos, handleToggle }) => {
  return (
    <ul>
      {todos.map(todo => (
        <Todo key={todo.id} todo={todo} handleToggle={handleToggle} />
      ))}
    </ul>
  );
};

export default TodoList;
