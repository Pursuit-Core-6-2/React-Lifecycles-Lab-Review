import React from 'react';

import TodoItem from './TodoItem'
const TodosList = (props) => {
  const { todos } = props;
  return (
    <ul className="todos-list">
      {todos.map(todo =>
        <TodoItem
          key={todo.id}
          id={todo.id}
          text={todo.text}
          handleDeleteTodo={props.handleDeleteTodo}
        />)}
    </ul>
  )
}

export default TodosList
