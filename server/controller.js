const db = require("./db")
const bcrypt = require("bcrypt")
const saltrounds = 10


async function doRegister(req,res) {
    const { name, userName , email, birthday, password, password2 } = req.body;
    let errors = [];

    bcrypt.hash(password, saltrounds, (err , hash) =>{
      db.query(
        "INSERT INTO accounts (name, userName, email, birthday, password) VALUES (?,?,?,?,?);",
        [name, userName, email, birthday, hash],
        (err,result) => {
            console.log(err)
        }
    )  
    })
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