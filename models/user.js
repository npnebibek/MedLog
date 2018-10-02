const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

//user Schema
const UserSchema = new Schema({
    name:{
        type:String
    },
    email:{
        type: String,
        required: true 
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    permission:{
        type: String,
        required: true,
        default: 'user'
    },
    message: [{
        type: Schema.Types.ObjectId,
        ref: 'Message'
      }]


});

const User = module.exports = mongoose.model('User', UserSchema);
