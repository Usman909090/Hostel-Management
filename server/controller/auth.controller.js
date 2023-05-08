
const { tryCatchWrapper } = require("../utils/customError")

const login = tryCatchWrapper(async (req, res, next) => {
    res.json({ token: "ip" })
})


module.exports = {
    login
}