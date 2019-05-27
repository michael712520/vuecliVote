import { axios } from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
/* eslint-disable */
// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Get: `${baseUrl}/api/MbDetail/Get`,
  Update: `${baseUrl}/api/MbDetail/Update`,
  GetList: `${baseUrl}/api/MbDetail/GetList`,
  Save: `${baseUrl}/api/MbDetail/Save`
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
export function GetList(data) {
  return axios({
    url: config.GetList,
    method: 'get',
    params: data
  })
}

export function Save(model) {
  model.userId = 1
  return axios({
    url: config.Save,
    method: 'post',
    data: model
  })
}
