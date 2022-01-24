import { ADDN_COUNT, ADD_COUNT, SUB_COUNT } from './actionTypes'

export const addCount = () => ({
  type: ADD_COUNT,
})
export const addnCount = (payloay: any) => ({
  type: ADDN_COUNT,
  payloay,
})
export const subCount = (payloay: any) => ({
  type: SUB_COUNT,
  payloay,
})
