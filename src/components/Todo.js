import React from 'react';
//todo: 安装 propTypes
const Todo = ({toggleDone, completed, text, deleteTodo}) => {
  return (
    <li
      style={{
        color: completed ? 'green' : 'black'
      }}
    >
    {text}
    <button onClick={deleteTodo}>delete</button>
    <button onClick={toggleDone}>done</button>
    </li>
  )
}

export default Todo;
