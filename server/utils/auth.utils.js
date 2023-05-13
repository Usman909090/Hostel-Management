const { tryCatchWrapper, CustomError } = require("./customError")
const jsonWebToken = require("jsonwebtoken")
const fs = require("fs")
const data = JSON.parse(fs.readFileSync("./config/db.json", "utf8"))
const nodemailer = require("nodemailer")

const generateToken = user => {
    return jsonWebToken.sign(user, "secret", { expiresIn: "6h" })
}


const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: "***@gmail.com", //sender email
        pass: "******",  //2fa generated password follow (https://stackoverflow.com/questions/45478293/username-and-password-not-accepted-when-using-nodemailer)
    }
})

transporter.verify((error, success) => {
    if (error) {
        console.error("error in verifying transporter", error.message);
        return;
    }
    console.log("email server is ready");
});

const sendRequestCode = async (requestEmail, requestCode) => {
    const mailOptions = {
        from: "risingPearls16@gmail.com", //sender email
        to: requestEmail,
        subject: 'Reset Password',
        text: requestCode
    };
    await transporter.sendMail(mailOptions)
    return "success"
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
    findUserByEmail,
    sendRequestCode
}