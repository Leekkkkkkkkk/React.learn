import {
  ADD_ITEM,
  CHANG_DONE,
  CHECKED_ALL,
  CLEAR_DONE,
  DEL_DONE,
  UPDATE_NAME,
} from '../actionsType/todoType'

/**
 *更改状态
 * @param payload id
 * @returns action
 */
export const changeDone = (payload: number) => ({
  type: CHANG_DONE,
  payload,
})

/**
 *删除当前项
 * @param payload id
 * @returns action
 */
export const delDone = (payload: number) => ({
  type: DEL_DONE,
  payload,
})

/**
 * 增加
 * @param payload
 * @returns
 */
export const addTodo = (payload: any) => ({
  type: ADD_ITEM,
  payload,
})

/**
 * 更改全选状态
 * @param payload
 * @returns action
 */
export const checkedAlls = (payload: boolean) => ({
  type: CHECKED_ALL,
  payload,
})

/**
 *编辑内容框
 * @param payload
 * @returns
 */
export const updateNmae = (payload: any) => ({
  type: UPDATE_NAME,
  payload,
})

/**
 *清除已完成
 * @returns
 */
export const clearDone = () => ({
  type: CLEAR_DONE,
})
