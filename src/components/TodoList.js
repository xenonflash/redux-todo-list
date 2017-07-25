import React from 'react';
import Todo from './Todo'
const TodoList = ({data, toggleDone, deleteTodo}) => {
  return (
    <ul>
      {
        data.map((todo, index) => (
          <Todo
            key={todo.id}
            toggleDone={() => {toggleDone(index)}}
            deleteTodo={() => {deleteTodo(index)}}
            {...todo}
          />
        ))
      }
    </ul>
  );
}

export default TodoList
