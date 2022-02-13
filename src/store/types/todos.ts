export interface IDelAction {
  type: 'DEL_TODO'
  payload: number
}
export interface IAddAction {
  type: 'ADD_TODO'
  payload: string
}
export type ToDoAction = IDelAction | IAddAction
