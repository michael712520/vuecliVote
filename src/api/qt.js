/* eslint-disable */
import {
  axios
} from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

let baseUrl = defaultSettings.baseUrl
export const config = {
  GetByStudentAndMbDetailId: `${baseUrl}/api/QtDetail/GetByStudentAndMbDetailId/:studentIdCard/:mbDetailId`,
  SelectResultSimple: `${baseUrl}/api/QtDetail/SelectResultSimple`,
  SaveUpdate: `POST ${baseUrl}/api/MbGrade/SaveUpdate`,
  SelectResult: `${baseUrl}/api/QtDetail/SelectResult`,

}
export async function GetByStudentAndMbDetailId(params) {
  const {
    success,
    data
  } = await request(config.GetByStudentAndMbDetailId, params)
  return data
}
export async function SelectResultSimple(params) {
  const {
    success,
    data
  } = await request(config.SelectResultSimple, params)
  return data
}
export async function SelectResult(params) {
  const {
    success,
    data
  } = await request(config.SelectResult, params)
  return data
}