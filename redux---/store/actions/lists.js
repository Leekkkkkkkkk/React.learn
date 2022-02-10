import { ADD_COUNT } from '../actionsType/lists'

export const addAsync = (payload) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch({
        type: ADD_COUNT,
        payload,
      })
    }, 1000)
  }
}
