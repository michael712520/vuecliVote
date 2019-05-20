import map from './webapi/map'
import BaseApi from './webapi/BaseApi'
import market from './webapi/market'
import { API_HOST, BASE_HOST, AppCheckUpdateURL } from './baseConfig'

export default class Config {
  // 决定日志是否输出
  static AppIsDebug = true

  // 更新应用相关
  static AppID = '001'
  static AppVersion = 0
  static AppVersionName = '0.0.0'
  static AppCheckUpdateURL = AppCheckUpdateURL

  // 获取数据相关
  // static BaseURI = "http://192.168.0.103:8026";
  static BaseURI = BASE_HOST
  static webApiURI = API_HOST
  static API_HOST = API_HOST
  static BASE_HOST = BASE_HOST
  static ClientID = '123'
  static ClientSecret = '666'
  static tokenUrl = BaseApi.tokenUrl
  static webApi = {
    BaseApi,
    map,
    market
  }
  // GPS上传的间隔时间
  static IsUploadGPS = false
  static UploadGPSIntervalTime = 1 * 60 * 1000
}
