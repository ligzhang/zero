import request from "@/http/request.js"

export const fib = (param = {}) => {
  return request.get("/fib", param)
}
