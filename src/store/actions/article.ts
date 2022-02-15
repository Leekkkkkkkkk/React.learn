import axios from 'axios'
import { RootThunkAction } from '..'

export const getArticle = (id: number): RootThunkAction => {
  return async (dispatch) => {
    const res = await axios.get(
      `http://geek.itheima.net/v1_0/articles?channel_id=${id}&timestamp=${Date.now()}`
    )
    dispatch({
      type: 'article/getArticle',
      payload: res.data.data.results,
    })
  }
}
