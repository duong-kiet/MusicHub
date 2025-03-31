const bcrypt = require("bcryptjs");
const User = require("../models/user.model");

// POST /user/validateGmail - signup
module.exports.validateGmail = async (req, res) => {
  try {
    const existUser = await User.findOne({
      email: req.body.email,
    }).select("deleted");

    if(existUser) {
      if(existUser.deleted) {
        res.status(409).json({ message: "User deleted" });
        return;
      } else {
        res.status(409).json({ message: "User existed" });
        return;
      }
    } else {
      res.status(200).json({ message: "User gmail validate"})
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// POST /user/signup
module.exports.signupPost = async (req, res) => {
  // console.log(req.body)
  try {
    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt); 

    const userData = {
      name: req.body.name,
      birthday: req.body.birthday,
      gender: req.body.gender,
      email: req.body.email,
      password: hashedPassword
      // tokenUser: generateHelper.generateRandomString(30)
    }
      
    const newUser = await User.create(userData);
    res.status(201).json({ message: "User sign up successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// POST /user/signin
module.exports.signinPost = async (req, res) => {
  try {
    const existUser = await User.findOne({
      email: req.body.email,
    }).select("deleted password");

    const isPasswordValid = await bcrypt.compare(req.body.password, existUser.password)

    if(existUser) {
      if(existUser.deleted) {
        res.status(403).json({ message: "User deleted" });
        return;
      }
      if(!isPasswordValid) {
        res.status(401).json({ message: "Wrong password" });
        return;
      } 
      if(isPasswordValid && !existUser.deleted) {
        res.status(200).json({ message: "User sign in successfully" });
      }
    } else {
      res.status(404).json({ message: "User not found"})
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}