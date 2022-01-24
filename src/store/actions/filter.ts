import { SET_AVTIVE } from '../actionsType/filter'

/**
 * 修改高亮类型
 * @param payload string
 * @returns active
 */
export const setActive = (payload: string) => ({
  type: SET_AVTIVE,
  payload,
})
