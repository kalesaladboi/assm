require('express')
const bcrypt = require('bcryptjs');
const {Friend, Post, User} = require('./models')
const accounts = require('./accounts.js');


const errHand = (err)=> {
    console.error("Error: ", err)
}

async function userPage(req,res) {
  myUser = await req.session.user
  console.log(myUser)
  myPosts = await accounts.getPostsByUserId(myUser.userId)
  otherUser = await accounts.getUser(req.params.userName)
  otherPost = await accounts.getPostsByUserId(otherUser.userId)
  var nav = req.url.split('/')
 
  res.render('user',{data:myUser , posts:myPosts, nav:nav[2], data2:otherUser, posts2:otherPost})
}
async function deleteUserPage(req,res) {
  myUser = await req.session.user
  console.log(myUser)
  myPosts = await accounts.getPostsByUserId(myUser.userId)
  otherUser = await accounts.getUser(req.params.userName)
  otherPost = await accounts.getPostsByUserId(otherUser.userId)
  var nav = req.url.split('/')
 
  res.render('accDelete',{data:myUser , posts:myPosts, nav:nav[2], data2:otherUser, posts2:otherPost})
}
//User ineractive pages
async function doLogin(req,res){

  console.log(req.params.emailß)

  myUser = await accounts.getUserByEmail(req.params.email)

  console.log(myUser)

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(req.body.password, salt, (err, hash) => {
      if (err) {console.log(err)};
      req.body.password = hash})
    });
  
  if (req.body.email == myUser.email || req.body.password == myUser.password) {
    res.cookie('userName', `${myUser.userName}`)

    req.session.user = myUser

    console.log("delta")
    console.log(req.session.user)

    res.redirect(`/user/${myUser.userName}/feed`)

  } else {res.redirect(`/login`)
  console.log('login failed')
  }
}

async function searchUser(req, res) {
  user = await accounts.getUserByName(req.body.name)

  res.redirect(`/user/${user.userName}/feed`)
}

async function doUpdateAccount (req,res){

  myUser = await accounts.getUser(req.params.userName)

    if (req.body.bio != null){myUser.bio = req.body.bio}

    myUser = await myUser.save()
    res.redirect(`/user/${myUser.userName}/feed`)
}

async function doPost (req,res){

  myUser = await accounts.getUser(req.params.userName)
  console.log(myUser)

  const createPost = await Post.create({ 
    content: `${req.body.content}`, 
    userId: `${myUser.userId}`,
}).catch(errHand)
  
  res.redirect(`/user/${myUser.userName}/feed`)

}

async function doGetBio(req,res){
      var user = await User.findOne({
          where: {userName: `${req.params.userName}`}
      }).catch(errHand);
      var data = { name: `${user.name}`, bio: `${user.bio}`, birthday: `${user.birthday}`, userName: `${user.userName}`}
      
      console.log(data)
      res.render('bio',{data:data})
  }

async function postDelete(req,res){
  myUser = await req.session.user
  var deletePost = await Post.destroy({
    where: {id: `${req.params.id}`}
  })
  res.redirect(`/user.${myUser.userName}`)
}

async function doFollow(req,res){

    var followPointer = await User.findOne({
        where: {name: `${req.params.userName}`}
    })

    var follow = await Friend.create()

}

async function showFollowed(req,res){

    var userid = await User.findOne({
        where: {name: `${req.params.userName}`}
    }).catch(errHand)


    var userFriends = await Friend.findAll({ 
    where: { owneracc: userid.userId }, 
    include: [ { model: User , attributes: [] } ]
    }).catch(errHand)

    res.send(userFriends)
}

async function createUser (req,res){
    
    const { name, userName , email, birthday, password, password2 } = req.body;
    let errors = [];
    
    if (!name || !userName || !email || !birthday|| !password || !password2) {
      errors.push({ msg: 'Please enter all fields' });
    }
  
    if (password != password2) {
      errors.push({ msg: 'Passwords do not match' });
    }
  
    if (password.length < 6) {
      errors.push({ msg: 'Password must be at least 6 characters' });
    }
  
    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        userName,
        email,
        birthday,
        password,
        password2
      });
    } else {
      User.findOne({where:{email: `${email}`} }).then(user => {
        if (user) {
          errors.push({ msg: 'Email already exists' });
          res.render('register', {
            errors,
            name,
            userName,
            email,
            birthday,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            userName,
            email,
            birthday,
            password
          });
          
          bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser
              .save()

              res.send('posted');
              
          });
        });
        }
      });
    }
}

async function deleteUser(req,res) {
  myUser = await req.session.user
  if (req.body.userName == myUser.userName){
  await User.destroy({
    where: { userId: `${myUser.userId}`}
  })}
  res.redirect('/login')
}

module.exports = {  doLogin  , doUpdateAccount , showFollowed , doFollow, doPost, createUser , doGetBio , userPage , searchUser , deleteUser , deleteUserPage }
