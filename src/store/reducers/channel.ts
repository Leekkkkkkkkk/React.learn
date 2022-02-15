import { Channel, ChannelActionType } from '../types'

const initValue: {
  channelList: Channel[]
  active: number
} = {
  channelList: [],
  active: 0,
}

const channel = (state = initValue, action: ChannelActionType) => {
  switch (action.type) {
    case 'chanel/getChannelList':
      return { ...state, channelList: action.payload }
    case 'active/updateActive':
      // console.log(action.payload)
      return { ...state, active: action.payload }
    default:
      return state
  }
}
export default channel
