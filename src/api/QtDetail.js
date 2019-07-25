/* eslint-disable */
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Get: `${baseUrl}/api/QtDetail/Get/:id`,
  GetResult: `${baseUrl}/api/QtDetail/GetResult/:id/:batchNumber`,
  GetStudentAll: `${baseUrl}/api/QtDetail/GetStudentAll/:studentIdCard`,
  UpdateQtDetailItem: `${baseUrl}/api/QtDetail/UpdateQtDetailItem`,
  UpdateSelectResult: `${baseUrl}​/api/QtDetail/UpdateSelectResult`,
  GetByStudentAndMbDetailId: `${baseUrl}​/api/QtDetail/GetByStudentAndMbDetailId/:studentIdCard/:mbDetailId`
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

export async function UpdateSelectResult(params) {
  const {
    success,
    data
  } = await request(config.UpdateSelectResult, params)
  return data
}
export async function GetResult(params) {
  const {
    success,
    data
  } = await request(config.GetResult, params)
  return data
}
export async function GetByStudentAndMbDetailId(params) {
  const {
    success,
    data
  } = await request(config.GetByStudentAndMbDetailId, params)
  return data
}