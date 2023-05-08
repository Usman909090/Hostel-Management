const { tryCatchWrapper, CustomError } = require("./customError")
const jsonWebToken = require("jsonwebtoken")
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./config/db.json", "utf8"))

const generateToken = user => {
    return jsonWebToken.sign(user, "secret", { expiresIn: "6h" })
}

const findUserByEmail = (userEmail) =>
    data.users.find(({ email }) => email === userEmail)


const verifyToken = tryCatchWrapper(async (req, res, next) => {
    if (req.headers.authorization?.split(" ").length === 2) {

        const [_, token] = req.headers.authorization?.split(" ") //req.headers.cookie.split("=")
        console.log("is token", token)
        if (token) {
            const tokenVerified = await jsonWebToken.verify(token, "secret")

            console.log({ tokenVerified })
            req.user = tokenVerified?.user
            next()
            return
        }
    }
    else {
        next(new CustomError("Please provide api key", 401))
    }
})


module.exports = {
    verifyToken,
    generateToken,
    findUserByEmail
}