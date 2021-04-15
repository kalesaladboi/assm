const mysql = require("mysql")

const db = mysql.createConnection({
    user:"bbec476499053a",
    host:"us-cdbr-east-03.cleardb.com",
    password:"8923a034",
    database:"heroku_67514816a5564ab",
})

db.connect(function(error){
    if(!!error){
      console.log(error);
    }else{
      console.log('Connected!:)');
    }
  });

module.exports =  {db} 