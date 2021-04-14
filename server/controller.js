const db = require("./db")
const bcrypt = require("bcrypt")
const saltrounds = 10


async function doRegister(req,res) {
    const name = await req.body.name
    const userName = await req.body.userName
    const email = await req.body.email
    const birthday = await req.body.birthday
    const password = await req.body.password
    const password2 = await req.body.password2
    let errors = []

    if( password == password2){
    bcrypt.hash(password, saltrounds, (err , hash) =>{
      db.query(
        "INSERT INTO accounts (name, userName, email, birthday, password) VALUES (?,?,?,?,?);",
        [name, userName, email, birthday, hash],
        (err,result) => {
            console.log(err)
        }
    )  
    })
    } else {
        console.log( "passwords do not match" )
    }
}

async function doLogin(req,res){
    const { userName , password } = req.body

    db.query(
        "SELECT 8 FROM user WHERE userName = ?;",
        userName,
        (err, result) => {
            if(err) {
                res.send({ err:err })
            } 

            if (result.length > 0){
                bcrypt.compare(password, result[0].password, (err , response) =>{
                if (response) {
                    req.session.user = result
                    console.log(req.session.user)
                    res.send(result)
                } else {
                    res.send({ message: "wrong login information"})
                }
            })
            } else {
                res.send({ message: "user does not exist"})
            }
        }
    )
}

module.exports = { doRegister , doLogin}