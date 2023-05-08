
const { tryCatchWrapper, CustomError } = require("../utils/customError")
const { generateToken, findUserByEmail } = require("../utils/auth.utils")
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./config/db.json", "utf8"))
const bcrypt = require("bcrypt")

const login = tryCatchWrapper(async (req, res, next) => {
    console.log(findUserByEmail(req.body.email))
    const user = findUserByEmail(req.body.email)
    if (!user) throw new CustomError("Invalid credentiols", 404)

    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) throw new CustomError("Invalid credentiols", 404)

    const { password, ...rest } = user
    const token = generateToken(rest)

    res.send({
        token,
        user: rest
    })
})

const signUp = tryCatchWrapper(async (req, res, next) => {
    const user = findUserByEmail(req.body.email)
    if (user) throw new CustomError("User Already Exist", 422)

    const hashPassword = await bcrypt.hash(req.body.password, 10)

    if (hashPassword) {
        const payload = {
            email: req.body.email,
            id: data.users.length + 1,
        }
        await data.users.push({ ...payload, password: hashPassword })
        fs.writeFile("./config/db.json", JSON.stringify(data), (err) => {
            if (err) {
                console.log("file write errr" + err)
                throw new CustomError("Can not register user", 422)
            }
            const token = generateToken(payload)
            res.send({
                token,
                user: payload
            })
        })
    }
})



module.exports = {
    login,
    signUp
}