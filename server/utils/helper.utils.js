const fs = require("fs")

const generateRequestCode = () => {
    let code = "";
    for (let i = 0; i < 6; i++) {
        code += Math.ceil(Math.random() * 9)
    }
    return code
}

const getData = JSON.parse(fs.readFileSync("./config/db.json", "utf8"))

const updateData = async (data) =>
    await fs.writeFile("./config/db.json", JSON.stringify(data), () => { })

module.exports = {
    generateRequestCode, updateData,
    getData
}
