/* eslint-disable */
import {
  axios
} from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Add: `POST ${baseUrl}/api/LatitudeDetail/Add`,
  Update: `POST ${baseUrl}/api/LatitudeDetail/Update`,
  List: `${baseUrl}/api/LatitudeDetail/List`,
  Delete: `POST ${baseUrl}/api/LatitudeDetail/Delete/:id`,
  GetPicker: `${baseUrl}/api/LatitudeDetail/GetPicker`,
  GetListLat: `${baseUrl}/api/LatitudeDetail/GetListLat`,
  UpdateItemMbDetailItem: `POST ${baseUrl}/api/LatitudeDetail/UpdateItemMbDetailItem`
}
export async function Add(params) {
  const {
    success,
    data
  } = await request(config.Add, params)
  return data
}
export async function Update(params) {
  const {
    success,
    data
  } = await request(config.Update, params)
  return data
}

export async function List(params) {
  const {
    success,
    data
  } = await request(config.List, params)
  return data
}
export async function Delete(params) {
  const {
    success,
    data
  } = await request(config.Delete, params)
  return data
}
export async function GetPicker(params) {
  const {
    success,
    data
  } = await request(config.GetPicker, params)
  return data
}
export async function GetListLat(params) {
  const {
    success,
    data
  } = await request(config.GetListLat, params)
  return data
}
export async function UpdateItemMbDetailItem(params) {
  const {
    success,
    data
  } = await request(config.UpdateItemMbDetailItem, params)
  return data
}