const mysql = require("mysql")

const db = mysql.createconnection({
    user:"bbec476499053a",
    host:"us-cdbr-east-03.cleardb.com",
    password:"8923a034",
    database:"heroku_67514816a5564ab",
})

module.exports = { db }