import { IAddAction, IDelAction } from '../types/todos'

export const DelTodo = (payload: number): IDelAction => ({
  type: 'DEL_TODO',
  payload,
})
export const AddTodo = (payload: string): IAddAction => ({
  type: 'ADD_TODO',
  payload,
})
