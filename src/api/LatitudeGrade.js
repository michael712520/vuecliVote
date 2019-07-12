/* eslint-disable */
import { axios } from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

let baseUrl = defaultSettings.baseUrl
export const config = {
  SaveUpdate: `POST ${baseUrl}/api/LatitudeGrade/SaveUpdate`,
  GetMbDetail: `${baseUrl}/api/LatitudeGrade/GetMbDetail/:id`,
  Delete: `POST ${baseUrl}/api/LatitudeGrade/Delete/:id`
}
export async function SaveUpdate(params) {
  const { success, data } = await request(config.SaveUpdate, params)
  return data
}
export async function GetMbDetail(params) {
  const { success, data } = await request(config.GetMbDetail, params)
  return data
}
export async function Delete(params) {
  const { success, data } = await request(config.Delete, params)
  return data
}
