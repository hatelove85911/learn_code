const byId = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_TODO_SUCCESS':
      let nextState = {...state}
      action.todos.forEach(todo => nextState[todo.id] = todo)
      return nextState
    case 'ADD_TODO_SUCCESS':
    case 'TOGGLE_TODO_SUCCESS':
      return {...state, [action.todo.id]: action.todo}
    default:
      return state
  }
}

export default byId

export const getTodoById = (state, id) => state[id]
