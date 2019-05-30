import { axios } from '@/utils/request'
import defaultSettings from '@/config/defaultSettings'
/* eslint-disable */
// const baseUrl = 'http://192.168.70.47:9003'

let baseUrl = defaultSettings.baseUrl
export const config = {
  Login: `${baseUrl}/api/SysUser/Login`
}
export async function Login(userName, password) {
  console.log('Login', { username: userInfo.username, password: userInfo.password })

  let { data } = axios({
    url: config.Login,
    method: 'post',
    params: { username: userInfo.username, password: userInfo.password }
  })

  return data
}
