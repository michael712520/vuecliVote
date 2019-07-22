/* eslint-disable */
import { axios } from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  List: `${baseUrl}/api/LatitudeCategory/List`,
  SaveOrUpdate: `POST ${baseUrl}/api/LatitudeCategory/SaveOrUpdate`,
  Delete: `POST ${baseUrl}/api​/LatitudeCategory​/Delete​/:id`,
  SaveList: `POST ${baseUrl}/api/LatitudeCategory/SaveList`
}
export async function List(params) {
  const { success, data } = await request(config.List, params)
  return data
}
export async function SaveOrUpdate(params) {
  const { success, data } = await request(config.SaveOrUpdate, params)
  return data
}
export async function Delete(params) {
  const { success, data } = await request(config.Delete, params)
  return data
}
export async function SaveList(params) {
  const { success, data } = await request(config.SaveList, params)
  return data
}
