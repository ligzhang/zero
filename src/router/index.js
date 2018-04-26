import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

let routes = []

if (process.env.NODE_ENV != "production") {
  routes = require("./index.dev.js")
  console.log(routes.default, "routes.default")
} else {
  routes = require("./index.prod.js")
}

const router = new Router({
  routes: routes.default ? routes.default : []
})
export default router
