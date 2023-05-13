
const { tryCatchWrapper, CustomError } = require("../utils/customError")
const { generateToken, findUserByEmail, sendRequestCode } = require("../utils/auth.utils")
const { updateData, getData: data, generateRequestCode } = require("../utils/helper.utils")

const bcrypt = require("bcrypt")

const login = tryCatchWrapper(async (req, res, next) => {
    console.log(findUserByEmail(req.body.email))
    const user = findUserByEmail(req.body.email)
    if (!user) throw new CustomError("Invalid credentials", 404)

    const isMatch = await bcrypt.compare(req.body.password, user.password)
    if (!isMatch) throw new CustomError("Invalid credentials", 404)

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
            id: data.users.length + 1,
            ...req.body
        }

        data.users.push({ ...payload, password: hashPassword })
        await updateData(data)

        const token = generateToken(payload)
        res.send({
            token,
            user: payload
        })
    }
})

const forgotPassword = tryCatchWrapper(async (req, res, next) => {
    const requestEmail = req.body.email;

    if (!findUserByEmail(requestEmail)) throw new CustomError("User not exist", 422);

    const requestCode = generateRequestCode()

    await sendRequestCode(requestEmail, requestCode)
    const hashCode = await bcrypt.hash(requestCode, 6)
    data.users = data.users.map((user) => {
        if (user.email === requestEmail) {
            user.requestCode = hashCode
        }
        return user
    })
    await updateData(data)
    res.json({ data: `Email Send successfully to ${requestEmail} with requst code ${requestCode} ` })
})

const resetPassword = tryCatchWrapper(async (req, res, next) => {
    const requestEmail = req.body.email;
    const user = findUserByEmail(requestEmail)
    if (!user) throw new CustomError("User not exist", 400);

    const isMatch = await bcrypt.compare(req.body.requestCode, user.requestCode)

    if (!isMatch) throw new CustomError("Invalid Code", 422);

    const hashPassword = await bcrypt.hash(req.body.password, 10)

    data.users = data.users.map((user) => {
        if (user.email === requestEmail) {
            user.password = hashPassword
            delete user["requestCode"]
        }
        return user
    })
    await updateData(data)
    res.json({ data: `Password reset successfully!` })

})

module.exports = {
    login,
    signUp,
    forgotPassword,
    resetPassword
}