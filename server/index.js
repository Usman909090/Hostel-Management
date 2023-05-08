
const jsonServer = require('json-server')

const server = jsonServer.create()
const router = jsonServer.router("./config/db.json")
const middlewares = jsonServer.defaults()
server.use(middlewares)
const bodyParser = require("body-parser")

const authController = require("./controller/auth.controller")
const { verifyToken } = require("./utils/auth.utils")
server.use(bodyParser.json())

server.post("/auth/login", authController.login)
server.post("/auth/signup", authController.signUp)
server.use("/admin", verifyToken, router)

server.use((error, req, res, next) => {
    console.log("error is middleware", error.statusCode, error.message)
    res.status(error.statusCode || 500).send({ message: error.message })
})

server.listen(4000, () => console.log("app is running at 4000"))