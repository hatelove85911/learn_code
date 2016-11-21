import expect from 'expect'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers} from 'redux'


// reducers
const visibilityFilter = (state = "SHOW_ALL", action) => {
  switch (action.type){
    case 'SET_VISIBILITY':
      return action.filter
      break
    default:
      return state
  }
}
const todo = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
      break;
    case 'TOGGLE_TODO':
      if (state.id === action.id) {
        return {
          ...state,
          completed: !state.completed
        }
      }
      return state
      break;
    default:
      return state
  }
}


const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, todo(undefined, action)]
      break;
    case 'REMOVE_TODO':
      return state.filter( s => s.id !== action.id)
      break;
    case 'TOGGLE_TODO':
      return state.map((s) => todo(s, action))
      break;
    default:
      return state
  }
}

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

const store = createStore(todoApp);


// react components
const FilterLink = ({filter, currentFilter ,children}) => {
  if (filter === currentFilter) {
    return <span>{children}</span>
  }
  return (
    <a href='#' onClick={
      () => {
        store.dispatch({
          type: 'SET_VISIBILITY',
          filter
        })
      }
    }>{children}</a>
  )
}

const Todo = ({completed, text, onClick}) => {
  return (
    <li onClick={onClick} style={{
                textDecoration: completed ? 'line-through' : 'none'
               }}>{text}</li>
  )
};

const TodoList = ({visibleTodos, onTodoClick }) => {
  return (
    <ul>
      {visibleTodos.map(t => {
        return (
          <Todo {...t} key={t.id} onClick={() => {
            onTodoClick(t.id)
          }}/>
        )
      })}
    </ul>
  )
}

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_ACTIVE':
      return todos.filter((t) => {
        return !t.completed
      })
    case 'SHOW_COMPLETED':
      return todos.filter((t) => {
        return t.completed
      })
    default:
      return todos
  }
}

let nextId = 0;
class TodoApp extends Component {
  init() {
  }
  render() {
    const {todos,  visibilityFilter} = this.props
    const visibleTodos = getVisibleTodos(todos, visibilityFilter)

    return (
      <div>
        <input ref='input'/>
        <button onClick={() => {
            store.dispatch({
              type: 'ADD_TODO',
              id: ++nextId,
              text: this.refs.input.value
            })
            this.refs.input.value = ""
          }
        }> Add </button>
        <TodoList visibleTodos={visibleTodos} onTodoClick={(todoid) => {
              store.dispatch({
                type: 'TOGGLE_TODO',
                id: todoid
              })
        }}/>
        
        <p> show:{' '}
          <FilterLink filter="SHOW_ALL" currentFilter={visibilityFilter}>All</FilterLink>,{' '}
          <FilterLink filter="SHOW_ACTIVE" currentFilter={visibilityFilter}>Active</FilterLink>,{' '}
          <FilterLink filter="SHOW_COMPLETED" currentFilter={visibilityFilter}>Completed</FilterLink>,{' '}
        </p>
      </div>
    )
  }
}

const render = () => {
  ReactDOM.render(
    <TodoApp {...store.getState()}/>, document.getElementById('root')
  )
}

store.subscribe(render)
render()
