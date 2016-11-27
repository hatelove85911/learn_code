import todo from './todo'

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
