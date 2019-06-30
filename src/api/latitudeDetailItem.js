/* eslint-disable */
import {
  axios
} from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Add: `POST ${baseUrl}/api/LatitudeDetailItem/Add`,
  Update: `POST ${baseUrl}/api/LatitudeDetailItem/Update`,
  List: `${baseUrl}/api/LatitudeDetailItem/List`,
  Delete: `POST ${baseUrl}/api/LatitudeDetailItem/Delete/:id`,
  GetPicker: `${baseUrl}/api/LatitudeDetailItem/GetPicker`,

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