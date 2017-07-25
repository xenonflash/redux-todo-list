import {connect} from 'react-redux'
import {addTodo, deleteTodo, toggleTodo} from '../action/actions'
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import React from 'react'
const TodoListApp = ({data, deleteTodo, addTodo, toggleDone}) => {
  return (
    <div>
      <AddTodo
        addTodo={addTodo}
      />
      <TodoList
        data={data}
        deleteTodo={deleteTodo}
        toggleDone={toggleDone}
      />
    </div>
  );
}

const getVisiableTodos = (todos, filter) => {
  switch(filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed);
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed);
  }
}
const mapStateToProps = (state) => {
  return {
    data: getVisiableTodos(state.todos, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (text) => {dispatch(addTodo(text))},
    deleteTodo: (index) => {
      dispatch(deleteTodo(index))
    },
    toggleDone: (index) => {
      dispatch(toggleTodo(index))
    }
  }
}
const FinalApp = connect(mapStateToProps, mapDispatchToProps)(TodoListApp)
export default FinalApp