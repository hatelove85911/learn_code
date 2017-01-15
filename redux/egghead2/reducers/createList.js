const createList = filter => {
  return (state=[], action) => {
    if (action.filter !== filter) {
      return state
    }
    switch (action.type) {
      case 'RECEIVE_TODO':
        return action.todos.map(todo => todo.id)
      default:
        return state
    }
  }
}

export default createList

export const getIds = state => state
