/* eslint-disable */
import {
  axios
} from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Get: `${baseUrl}/api/QtDetail/Get/:id`,
  GetStudentAll: `${baseUrl}/api/QtDetail/GetStudentAll/:studentIdCard`,
  UpdateQtDetailItem: `${baseUrl}/api/QtDetail/UpdateQtDetailItem`,
  UpdateAll: `POST ${baseUrl}​/api​/QtDetail​/UpdateAll`,

}
export async function Get(params) {
  const {
    success,
    data
  } = await request(config.Get, params)
  return data
}
export async function GetStudentAll(params) {
  const {
    success,
    data
  } = await request(config.GetStudentAll, params)
  return data
}
export async function UpdateQtDetailItem(params) {
  const {
    success,
    data
  } = await request(config.UpdateQtDetailItem, params)
  return data
}
export async function UpdateAll(params) {
  
  const {
    success,
    data
  } = await request(config.UpdateAll, params)
  return data
}