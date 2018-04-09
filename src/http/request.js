import axios from "axios"

const baseUrl = "http://47.98.156.20:9999/"

class Request {
  constructor() {
    this._axios = axios.create({
      baseUrl
    })
  }

  setHeaders(headers) {
    Object.keys(headers).forEach(key => {
      this._axios.defaults.headers[key] = headers[key]
    })
  }

  get(url, query = {}) {
    return this._request("get")(url, query)
  }

  post(url, body = {}) {
    return this._request("post")(url, body)
  }

  _request(method) {
    return (url, data) => {
      // 构造请求config
      let config = {
        url,
        method
      }
      if (method === "get") {
        config.params = {
          ...data
        }
      } else if (method == "post") {
        config.body = {
          ...data
        }
      }
      console.log(config, baseUrl, "config")

      return new Promise((resolve, reject) => {
        this._axios
          .request(config)
          .then(response => {
            if (response.status > 200 || response.status < 400) {
              resolve(response.data)
            } else {
              reject()
            }
          })
          .catch(error => {
            reject(error)
          })
      })
    }
  }
}

export default new Request()
