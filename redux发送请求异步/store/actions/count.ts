import { ADD_COUNT } from '../actiontype/count'

/**
 * 加
 * @returns
 */
export const addCount = () => {
  return (dispatch: any) => {
    setTimeout(() => {
      dispatch({
        type: ADD_COUNT,
      })
    }, 1000)
  }
}
