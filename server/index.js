const express = require("express")
const cors = require("cors")
const sequelize = require('./db');
const controller = require('./controller')

const PORT = process.env.PORT || 6969

const bodyParser = require("body-parser")
const cookieParser = require("cookie-parser")
const session = require("express-session")

const app = express()

app.use(express.json())
app.use(cors())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.use(session({
    key: "userId",
    secret: "gawkgawk3000",
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60*60*24*7
    }
}))

app.post("/", controller.createUser)
app.post("/login", controller.doLogin)

app.listen(PORT, function(){
    console.log(`server is running on port: ${PORT}`)
})