/* eslint-disable */
import {
  axios
} from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

let baseUrl = defaultSettings.baseUrl
export const config = {
  AddLocal: `POST ${baseUrl}/api/ExternalLinks/AddLocal/:mbQuestionId`,
}
export async function AddLocal(params) {
  const {
    success,
    data
  } = await request(config.AddLocal, params)
  return data
}