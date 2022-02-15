import axios from 'axios'
import { RootThunkAction } from '..'
import { UpdateActive } from '../types'

export const getChannel = (): RootThunkAction => {
  return async (dispatch) => {
    const res = await axios.get('http://geek.itheima.net/v1_0/channels')
    console.log(res)
    dispatch({
      type: 'chanel/getChannelList',
      payload: res.data.data.channels,
    })
  }
}

export const updateActive = (payload: number): UpdateActive => ({
  type: 'active/updateActive',
  payload,
})
