import { ThunkAction } from 'redux-thunk'
import { RootState } from '..'
import { IAddAction, IDelAction, UpdateAction } from '../types/todos'

export const DelTodo = (
  payload: number
): ThunkAction<void, RootState, unknown, IDelAction> => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: 'DEL_TODO',
        payload,
      })
    }, 1000)
  }
}
export const AddTodo = (payload: string): IAddAction => ({
  type: 'ADD_TODO',
  payload,
})
export const UpdateActionTodo = (payload: number): UpdateAction => ({
  type: 'UPDATE_TODO',
  payload,
})
