import { axios } from '@/utils/request'
// import { baseUrl } from '@/config/defaultSettings'
/* eslint-disable */
const baseUrl = 'http://192.168.70.47:9003'

export const config = {
  GetList: `${baseUrl}/api/MbDetail/GetList`,
  Save: `${baseUrl}/api/MbDetail/Save`
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
