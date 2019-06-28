/* eslint-disable */
import { axios } from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
import request from './comm/request'

// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Get: `${baseUrl}/api/QtDetail/Get/:id`
}
export async function Get(params) {
  const { success, data } = await request(config.Get, params)
  return data
}
