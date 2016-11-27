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

export default todos

export const getVisibleTodos = (state, filter) => {
  switch (filter) {
    case 'all':
      return state
    case 'active':
      return state.filter((t) => {
        return !t.completed
      })
    case 'completed':
      return state.filter((t) => {
        return t.completed
      })
    default:
      return state
  }
}

