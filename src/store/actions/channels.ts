import { SET_ACTIVE, SET_CHANNELS } from '../actionType/channels'
import axios from 'axios'
/**
 *获取列表
 * @param payload  []
 * @returns  action
 */
export const setChannel = () => {
  return async (dispatch: any) => {
    const { data: res } = await axios.get(
      'http://geek.itheima.net/v1_0/channels'
    )
    dispatch({
      type: SET_CHANNELS,
      payload: res.data.channels,
    })
  }
}
/**
 *设置高亮
 * @param payload id
 * @returns active
 */
export const setActive = (payload: number) => ({
  type: SET_ACTIVE,
  payload,
})
