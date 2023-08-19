import React from 'react';

const Todo = ({ todo, handleToggle }) => {
  return (
    <li
      onClick={() => handleToggle(todo.id)}
      className={todo.completed ? 'completed' : ''}
    >
      {todo.name}
    </li>
  );
};

export default Todo;
