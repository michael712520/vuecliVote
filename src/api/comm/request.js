/* global window */
/* eslint-disable */
import axios from 'axios'
import qs from 'qs'
import jsonp from 'jsonp'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import Cookies from 'js-cookie'
export const getAccessToken = () => {
  const access_token = Cookies.get('access_token')
  return access_token
}

const fetch = async options => {
  let { method = 'get', data, fetchType, url } = options

  let cloneData = lodash.cloneDeep(data)
  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      // eslint-disable-next-line
      ;[domin] = url.match(/[a-zA-z]+:\/\/[^/]*/)
      url = url.slice(domin.length)
    }
    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (let item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    message.error(e.message)
  }

  if (fetchType === 'JSONP') {
    return new Promise((resolve, reject) => {
      jsonp(
        url,
        {
          param: `${qs.stringify(data)}&callback`,
          name: `jsonp_${new Date().getTime()}`,
          timeout: 100000
        },
        (error, result) => {
          if (error) {
            reject(error)
          }
          resolve({
            statusText: 'OK',
            status: 200,
            data: result
          })
        }
      )
    })
  } else if (options.headers && options.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    cloneData = `${qs.stringify(cloneData)}`
  }

  const config = {
    headers: options.headers || {}
  }
  const accessToken = await getAccessToken()
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  switch (method.toLowerCase()) {
    case 'get':
      if (cloneData) {
        Object.keys(cloneData).forEach(key => {
          if (Array.isArray(cloneData[key])) {
            cloneData[key].forEach((x, index) => {
              var myKey = `${key}[${index}]`
              cloneData[myKey] = x
            })
            delete cloneData[key]
          }
        })
      }
      console.log('axios.get', {
        url,
        params: cloneData,
        headers: config.headers
      })

      return axios.get(url, {
        params: cloneData,
        headers: config.headers
      })
    case 'delete':
      console.log('axios.delete', {
        url,
        params: cloneData,
        headers: config.headers
      })

      return axios.delete(
        url,
        {
          data: cloneData,
          headers: config.headers
        },
        config
      )
    case 'post':
      console.log('axios.post', {
        url,
        params: cloneData,
        headers: config.headers
      })

      return axios.post(url, cloneData, config)
    case 'put':
      console.log('axios.put', {
        url,
        params: cloneData,
        headers: config.headers
      })
      return axios.put(url, cloneData, config)
    case 'patch':
      console.log('axios.patch', {
        url,
        params: cloneData,
        headers: config.headers
      })
      return axios.patch(url, cloneData, config)
    default:
      return axios(options)
  }
}

const supportMethods = ['POST', 'GET', 'DELETE', 'PATCH', 'PUT', 'post', 'get', 'delete', 'patch', 'put']
const supportMethodPrefixs = supportMethods.map(x => `${x} `)

function getRequestOptions(urlAndMethod, data) {
  let url = urlAndMethod
  let method = 'get'
  const count = supportMethodPrefixs.length
  for (let index = 0; index < count; index++) {
    let prefix = supportMethodPrefixs[index]
    if (urlAndMethod.startsWith(prefix)) {
      url = urlAndMethod.replace(prefix, '').trim()
      method = prefix.trim()
      break
    }
  }
  return {
    url,
    method,
    data
  }
}

export default function request(options, payload, headerOptions) {
  if (typeof options === 'string') {
    options = getRequestOptions(options, payload)
  }

  if (payload && payload.page > 0 && payload.pageSize > 0) {
    payload.start = (payload.page - 1) * payload.pageSize
    payload.length = payload.pageSize
  }

  if (options.url && options.url.indexOf('//') > -1) {
    const origin = `${options.url.split('//')[0]}//${options.url.split('//')[1].split('/')[0]}`
    options.fetchType = 'CORS'
    // if (window.location.origin !== origin) {
    //   options.fetchType = 'CORS'
    //   // if (CORS && CORS.indexOf(origin) > -1) {
    //   //     options.fetchType = 'CORS'
    //   // } else {
    //   //     options.fetchType = 'JSONP'
    //   // }
    // }
  }
  options = {
    ...options,
    headers: {
      ...headerOptions
    }
  }
  return fetch(options)
    .then(response => {
      const { statusText, status } = response
      let { data } = response

      let reData = {
        success: true,
        message: statusText,
        statusCode: status,
        data: data
      }
      if (data.hasOwnProperty('code') && data.hasOwnProperty('data')) {
        reData = {
          success: true,
          message: data.message,
          statusCode: data.code,
          data: data.data
        }
      }
      return Promise.resolve(reData)
    })
    .catch(error => {
      const { response } = error
      let msg
      let statusCode
      if (response && response instanceof Object) {
        const { data, statusText } = response
        statusCode = response.status
        msg = data.message || data.error_description || statusText
      } else {
        statusCode = 600
        msg = error.message || 'Network Error'
      }
      let result = {
        success: false,
        statusCode,
        message: msg
      }
      /* eslint-disable */
      //TODO：如果使用reject会给await异常处理带来一些麻烦，要改善此处
      return Promise.reject(result)
    })
}
