/* eslint-disable */
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'
/* eslint-disable */
// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Get: `${baseUrl}/api/MbDetail/Get`,
  SaveUpdate: `POST ${baseUrl}/api/MbDetail/SaveUpdate`,
  Delete: `POST ${baseUrl}/api/MbDetail/Delete/:id`,
  DeleteItem: `POST ${baseUrl}/api/MbDetail/DeleteItem/:id`,
  GetList: `${baseUrl}/api/MbDetail/GetList`,
  Save: `${baseUrl}/api/MbDetail/Save`,
  GetListItem: `${baseUrl}/api/MbDetail/GetListItem`,
  SaveItem: `POST ${baseUrl}/api/MbDetail/SaveItem`,
  UpdateSelectResult: `POST ${baseUrl}/api/MbDetail/UpdateSelectResult`,
  ListSaveItem: `POST ${baseUrl}/api/MbDetail/ListSaveItem`,
  UpdateMbDetail: `POST ${baseUrl}/api/MbDetail/UpdateMbDetail`,
  UpdateState: `POST ${baseUrl}/api/MbDetail/UpdateState/:id/:state`,
}
export async function Get(id) {
  const {
    success,
    data
  } = await request(config.Get, {
    id: id
  })
  return data
}
export async function SaveUpdate(params) {
  const {
    success,
    data
  } = await request(config.SaveUpdate, params)
  return data
}
export async function GetList(params) {
  const {
    success,
    data
  } = await request(config.GetList, params)
  return data
}
export async function GetListItem(params) {
  const {
    success,
    data
  } = await request(config.GetListItem, params)

  return data
}
export async function SaveItem(params) {
  const {
    success,
    data
  } = await request(config.SaveItem, params)
  return data
}
export async function ListSaveItem(params) {
  let hData = params.map(item => {
    let putData = {}
    Object.keys(item).forEach(d => {
      if (d === 'latitudeDetailIds') {
        if (Array.isArray(item[d])) {
          putData[d] = item[d]
        } else {
          try {
            putData[d] = JSON.parse(item[d])
          } catch (error) {}
        }

      } else if (item[d]) {
        putData[d] = item[d]
      }
    })
    return putData
  })

  const {
    success,
    data
  } = await request(config.ListSaveItem, hData)
  return data
}

export async function Delete(id) {
  const {
    success,
    data
  } = await request(config.Delete, {
    id: id
  })

  return data
}
export async function DeleteItem(id) {
  const {
    success,
    data
  } = await request(config.DeleteItem, {
    id: id
  })

  return data
}
export async function UpdateMbDetail(params) {
  console.log('config.UpdateMbDetail', params)
  const {
    success,
    data
  } = await request(config.UpdateMbDetail, params)
  return data
}
export async function UpdateSelectResult(params) {
  console.log('config.UpdateSelectResult', params)
  const {
    success,
    data
  } = await request(config.UpdateSelectResult, params)
  return data
}
export async function UpdateState(params) {
  const {
    success,
    data
  } = await request(config.UpdateState, params)
  return data
}