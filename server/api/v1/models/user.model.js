const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  birthday: String, 
  gender: String,
  email: String,
  password: String,
  tokenUser: String,
  avatar: {
    type: String,
    default: "https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg"
  },
  deleted: {
    type: Boolean,
    default: false
  },
}, {
  timestamps: true 
});


const User = mongoose.model("User", userSchema, "users"); 

module.exports = User;