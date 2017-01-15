const byId = (state = {}, action) => {
  switch (action.type) {
    case 'RECEIVE_TODO':
      let nextState = {...state}
      action.todos.forEach(todo => nextState[todo.id] = todo)
      return nextState
    default:
      return state
  }
}

export default byId

export const getTodoById = (state, id) => state[id]
