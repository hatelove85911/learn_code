import {v4} from 'node-uuid'

const fakeDatabase = {
  todos: [{
    id: v4(),
    text: 'hey',
    completed: true
  }, {
    id: v4(),
    text: 'ho',
    completed: true
  }, {
    id: v4(),
    text: 'let go',
    completed: false
  }]
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchTodos = filter => 
  delay(500).then(() => {
    if (Math.random() > 0.5) {
      throw new Error('random error !!')
    }
    switch (filter) {
      case 'all':
        return fakeDatabase.todos
      case 'active':
        return fakeDatabase.todos.filter(t => !t.completed)
      case 'completed':
        return fakeDatabase.todos.filter(t => t.completed)
      default:
        throw new Error(`unknown filter: ${filter}`)
    }
  })


export const addTodo = text => {
  const newTodo = {
    id: v4(),
    text,
    completed: false
  }

  return delay(500).then(() => {
    fakeDatabase.todos.push(newTodo)
    return newTodo
  })
}

export const toggleTodo = id => {
  const todo = fakeDatabase.todos.find((t) => t.id === id)
  return delay(500).then(() => {
    todo.completed = !todo.completed
    return todo
  })
}
