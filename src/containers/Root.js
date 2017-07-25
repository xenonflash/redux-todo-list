import React from 'react'
import {Provider, combineReducers} from 'react-redux'
import {createStore} from 'redux';
import todoApp from '../reducer/todo';
import AddTodo from '../components/AddTodo'
import TodoList from '../components/TodoList'
import FinalApp from '../containers/TodoListApp'
let store = createStore(todoApp);


const App = () => (
  <div >
    <Provider store={store}>
      <FinalApp/>
    </Provider>
  </div>
)

export default App