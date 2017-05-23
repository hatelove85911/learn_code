import { schema } from 'normalizr'

export const todo = new schema.Entity('todos')
export const todos = new schema.Array(todo)
