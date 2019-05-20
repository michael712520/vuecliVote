import { API_HOST, BASE_HOST } from '../baseConfig'
/* eslint-disable */
console.log(API_HOST)
const models = {
  tokenUrl: `${BASE_HOST}/token`, // 用户登录token
  User: `${BASE_HOST}/api/jhAuth/users/me`, // 用户登录token
  User1: `${BASE_HOST}/AppApi/PatrolApp/GetListPatrolPoint` // 轨迹
}
export default models
