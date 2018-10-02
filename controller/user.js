const User = require('../models/user');
const Message = require('../models/message');
const bcrypt = require('bcryptjs'); // bcrypt.js is a js library to hash the password before storing
const jwt = require ('jsonwebtoken');
const config = require ('../config/database');
const passport = require ('passport');

module.exports = {

  Index: async (req, res, next) => {
    const users = await User.find({});
    console.log(users);
    res.json(users);
  },

  registerUser: (req, res) => {
    console.log(req.body);
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      username: req.body.username,
      password: req.body.password
    });
    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(newUser.password,salt, (err,hash)=>{
        if(err) throw err;
        newUser.password= hash;
        newUser.save();
        if (err) {
            res.json({ success: false, msg: 'failed to register user' });
          } else {
            res.json({ success: true, msg: 'user has been registered' });
          }
        
        });
    });
   
  },

  authenticateUser: (req, res, next) => {
    const username=req.body.username;
    const password=req.body.password;
    const query = {username: username}

    User.findOne(query, (err, user) => {
        if(err) throw err;
        if(!user){
            return res.json({ sucess:false,msg:'User not found' });
        }
        
        bcrypt.compare(password, user.password, (err, isMatch) => {
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign(user, config.secret, {
                    expiresIn: 604800//1 week time to expire the user password
                });
                res.json({
                    sucess:true,
                    token:'JWT '+token,
                    user:{
                        id:user._id,
                        name:user.name,
                        username:user.username,
                        email:user.email,
                        permission:user.permission
                        
                    }
                });

            } else {
                return res.json({sucess:false,msg:'wrong password'});

            }
        });
         
    });


  },

  
  getProfile:  (req,res,next) => {
      res.json({user:req.user});
    },

  getUser: (req, res) => {
    const { userId } = req.params;
    User.findById(userId, (err, user) => {
      if (err) throw err;
      if (!user) {
        return res.json({ sucess: false, msg: 'User not found' });
      } else {
        res.json({ success: true,
          user: {
            id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            permission: user.permission,
            message: user.message
          }
        });
      }
    });
  },

  getUserMessages: async (req,res,next) => {
    const { userId } = req.params;
    const user = await User.findById(userId).populate('message');
    console.log('user',user.message)
  },

  newUserMessage: async (req,res,next) => {
      const { userId } = req.params;
      const newMessage = new Message(req.body);
      console.log('newMessage', newMessage);
      const user = await User.findById(userId);
      //Assign user as the message writer
      newMessage.user = user;
      //save message
      await newMessage.save();
      //again we use this message to assign to the message array of the user
      user.message.push(newMessage);
      //save this user
      await user.save();
      res.json(newMessage);
  }
};
