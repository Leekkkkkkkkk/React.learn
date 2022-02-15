export interface IDelAction {
  type: 'DEL_TODO'
  payload: number
}
export interface IAddAction {
  type: 'ADD_TODO'
  payload: string
}
export interface UpdateAction {
  type: 'UPDATE_TODO'
  payload: number
}
export type ToDoAction = IDelAction | IAddAction | UpdateAction
