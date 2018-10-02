const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  date: {
    type: Date,
    default: Date.now
  },
  note: {
    type: String,
    required: true
  }

});

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;