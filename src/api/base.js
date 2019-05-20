import { API_HOST, BASE_HOST } from '../config/baseConfig'
import request from '../utils/request'
/* eslint-disable */
const config = {
  tokenUrl: `${BASE_HOST}/token`, // 用户登录token
  User: `${BASE_HOST}/api/jhAuth/users/me`, // 用户登录token
  GetListPatrolPoint: `${BASE_HOST}/AppApi/PatrolApp/GetListPatrolPoint` // 轨迹
}
console.log(API_HOST)
const models = {
  GetListPatrolPoint: async function(patrolId) {
    const { success, data } = await request(config.GetListPatrolPoint, {
      patrolId: patrolId
    })
    return data
  }
}
export default models
