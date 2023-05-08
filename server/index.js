// const express = require("express")

// const app = express()

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router("./config/db.json")
const middlewares = jsonServer.defaults()

server.use(middlewares)

const authController = require("./controller/auth.controller")

server.get("/auth/login", authController.login)
server.use("/admin", router)

server.listen(4000, () => console.log("app is running at 4000"))