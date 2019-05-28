/* eslint-disable */
import api from './index'
import { axios } from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
let baseUrl = defaultSettings.baseUrl
export const config = {
  Login: `${baseUrl}/api/SysUser/Login`
}
/**
 * login func
 * parameter: {
 *     username: '',
 *     password: '',
 *     remember_me: true,
 *     captcha: '12345'
 * }
 * @param parameter
 * @returns {*}
 */
export async function login(parameter) {
  let response = await axios({
    url: config.Login,
    method: 'post',
    data: { username: parameter.username, password: parameter.password }
  })
  return response.data
}

export function getSmsCaptcha(parameter) {
  return axios({
    url: api.SendSms,
    method: 'post',
    data: parameter
  })
}

export async function getInfo() {
  let response = await axios({
    url: config.Login,
    method: 'post',
    data: { username: 'admin', password: '123' }
  })
  return response.data
}

export function logout() {
  return axios({
    url: '/auth/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8'
    }
  })
}

/**
 * get user 2step code open?
 * @param parameter {*}
 */
export function get2step(parameter) {
  return axios({
    url: api.twoStepCode,
    method: 'post',
    data: parameter
  })
}
