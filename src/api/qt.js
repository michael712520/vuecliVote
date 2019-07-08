/* eslint-disable */
import { axios } from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

let baseUrl = defaultSettings.baseUrl
export const config = {
  GetByStudentAndMbDetailId: `${baseUrl}/api/QtDetail/GetByStudentAndMbDetailId/:studentIdCard/:mbDetailId`
}
export async function GetByStudentAndMbDetailId(params) {
  const { success, data } = await request(config.GetByStudentAndMbDetailId, params)
  return data
}
