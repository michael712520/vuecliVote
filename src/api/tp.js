import { axios } from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
/* eslint-disable */
// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Get: `${baseUrl}/api/MbDetail/Get`,
  Update: `${baseUrl}/api/MbDetail/Update`,
  GetList: `${baseUrl}/api/MbDetail/GetList`,
  Save: `${baseUrl}/api/MbDetail/Save`,
  GetListItem: `${baseUrl}/api/MbDetail/GetListItem`,
  SaveItem: `${baseUrl}/api/MbDetail/SaveItem`
}
export function Get(id) {
  return axios({
    url: config.Get,
    method: 'get',
    params: { id: id }
  })
}
export function update(data) {
  return axios({
    url: config.Update,
    method: 'post',
    data: data
  })
}
export function GetList(params) {
  return axios({
    url: config.GetList,
    method: 'get',
    params: params
  })
}
export function GetListItem(params) {
  return axios({
    url: config.GetListItem,
    method: 'get',
    params: params
  })
}
export function SaveItem(model) {
  return axios({
    url: config.SaveItem,
    method: 'post',
    data: model
  })
}
