import { SET_NEWS } from '../actionType/news'
import axios from 'axios'
/**
 * 获取数据
 * @param payload
 * @returns
 */
export const setNews = (payload: any) => {
  return async () => {
    const res = await axios.get(
      `http://geek.itheima.net/v1_0/articles?channel_id=${payload}&timestamp=${Date.now()}`
    )
    console.log(res)
  }
  //   type: SET_NEWS,
  //         payload,
}
